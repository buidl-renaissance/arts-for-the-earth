import React, { useState, useEffect, Suspense } from "react";
import styled from "styled-components";
import Image from "next/image";
import { getOrCreateWallet } from "@/utils/wallet";
// import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
// import { getCollectibleSponsoredTx } from "@/utils/collect";
interface CoinData {
  id: string;
  title: string;
  image: string;
}

interface CollectibleProps {
  coinData: CoinData;
  uniqueId: string;
  onBack?: () => void;
}

const Collectible: React.FC<CollectibleProps> = ({
  coinData,
  uniqueId,
  onBack,
}) => {
  const [isCollected, setIsCollected] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [isFadedOut, setIsFadedOut] = useState(true);
  const [isGlowing, setIsGlowing] = useState(false);
  // const [wallet, setWallet] = useState<Ed25519Keypair | null>(null);
  // const [signedTx, setSignedTx] = useState<string | null>(null);

  useEffect(() => {
    const fetchMint = async () => {
      const wallet = getOrCreateWallet();
      if (!wallet) return;
      const response = await fetch(`/api/collect/mint?coinId=${coinData.id}&userAddress=${wallet.getPublicKey().toSuiAddress()}`)
      const data = await response.json();
      console.log(data);
      alert("Minted");
    };
    fetchMint();
  }, []);
  
  // useEffect(() => {
  //   const executeTx = async () => {
  //     const wallet = getOrCreateWallet();
  //     if (!wallet) return;

  //     try {
  //       // Execute the sponsored transaction
  //       // The signedTx should already be properly serialized and signed
  //       const client = getSuiClient();
        
  //       // Use the provided signedTx directly instead of trying to deserialize and re-sign
  //       const result = await client.executeTransactionBlock({
  //         transactionBlock: signedTx.bytes,
  //         signature: signedTx.signature,
  //       });

  //       console.log("Transaction executed:", result);
        
  //       // // Store the collected coin in localStorage
  //       // const collectedCoins = JSON.parse(
  //       //   localStorage.getItem("collectedCoins") || "[]"
  //       // );
  //       // if (!collectedCoins.includes(coinData.id)) {
  //       //   collectedCoins.push(coinData.id);
  //       //   localStorage.setItem("collectedCoins", JSON.stringify(collectedCoins));
  //       // }
  //     } catch (error) {
  //       console.error("Error executing transaction:", error);
  //     }
  //   };

  //   if (signedTx) {
  //     executeTx();
  //   }
  // }, []);

  // useEffect(() => {
  //   const fetchSignedTx = async () => {
  //     const response = await fetch("/api/collect", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         coinId: coinData.id,
  //         address: wallet?.getPublicKey().toSuiAddress(),
  //       }),
  //     });
  //     const data = await response.json();
  //     setSignedTx(data.signedTx);
  //   };
  //   if (!signedTx) {
  //     fetchSignedTx();
  //   }
  // }, [signedTx, wallet, coinData.id]);

  useEffect(() => {
    // Check if this coin was already collected in localStorage
    const collectedCoins = JSON.parse(
      localStorage.getItem("collectedCoins") || "[]"
    );
    if (collectedCoins.includes(coinData.id)) {
      setIsCollected(true);
      setIsFadedOut(false);
      setIsGlowing(true);
    } else {
      setIsCollected(false);
      setIsFadedOut(true);
      setIsGlowing(false);
    }

    if (uniqueId) {
      if (isCollected) return;

      setIsSpinning(true);
      setIsFadedOut(false);

      // Spin for 3 seconds before showing collected state
      setTimeout(() => {
        setIsSpinning(false);
        setIsCollected(true);
        setIsGlowing(true);

        // Save to localStorage
        const collectedCoins = JSON.parse(
          localStorage.getItem("collectedCoins") || "[]"
        );
        if (!collectedCoins.includes(coinData.id)) {
          collectedCoins.push(coinData.id);
          localStorage.setItem(
            "collectedCoins",
            JSON.stringify(collectedCoins)
          );
        }
      }, 3000);
    }
  }, [coinData.id]);

  //   const handleCollect = () => {
  //     if (isCollected) return;

  //     setIsSpinning(true);
  //     setIsFadedOut(false);

  //     // Spin for 3 seconds before showing collected state
  //     setTimeout(() => {
  //       setIsSpinning(false);
  //       setIsCollected(true);
  //       setIsGlowing(true);

  //       // Save to localStorage
  //       const collectedCoins = JSON.parse(
  //         localStorage.getItem("collectedCoins") || "[]"
  //       );
  //       if (!collectedCoins.includes(coinData.id)) {
  //         collectedCoins.push(coinData.id);
  //         localStorage.setItem("collectedCoins", JSON.stringify(collectedCoins));
  //       }
  //     }, 3000);
  //   };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CoinContainer interactive={!isCollected}>
        <CoinWrapper
          spinning={isSpinning}
          collected={isCollected}
          fadedOut={isFadedOut}
          glowing={isGlowing}
        >
          <Image
            src={coinData.image}
            alt={coinData.title}
            width={180}
            height={180}
            className="coin-image"
          />
        </CoinWrapper>
        <GlowEffect active={isGlowing} />
      </CoinContainer>

      <CollectionStatus>
        {isCollected ? (
          <CollectedMessage>
            <span>✓</span> Coin Collected!
          </CollectedMessage>
        ) : (
          <CollectPrompt>Find the earth to collect</CollectPrompt>
        )}
      </CollectionStatus>

      {onBack && <BackButton onClick={onBack}>Back to Collection</BackButton>}
    </Suspense>
  );
};

export default Collectible;

const CoinContainer = styled.div<{ interactive: boolean }>`
  position: relative;
  width: 180px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.interactive ? "pointer" : "default")};
  transition: transform 0.3s ease;

  &:hover {
    transform: ${(props) => (props.interactive ? "scale(1.05)" : "none")};
  }

  @media (min-width: 640px) {
    width: 180px;
    height: 180px;
  }
`;

const CoinWrapper = styled.div<{
  spinning: boolean;
  collected: boolean;
  fadedOut: boolean;
  glowing: boolean;
}>`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
  opacity: ${(props) => (props.fadedOut ? 0.4 : 1)};
  transition: opacity 0.5s ease;
  animation: ${(props) =>
    props.spinning
      ? "spin 0.8s 5 linear"
      : props.collected
      ? "collect 0.5s forwards"
      : "none"};

  .coin-image {
    border-radius: 50%;
    object-fit: contain;
    filter: drop-shadow(
      0 0 ${(props) => (props.glowing ? "20px" : "10px")}
        rgba(150, 230, 161, ${(props) => (props.glowing ? "0.8" : "0.5")})
    );
    border-color: #a7f3d0;
    border-width: 7px;
    border-radius: 50%;
    transition: filter 0.5s ease;
  }

  @keyframes spin {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }

  @keyframes collect {
    0% {
      transform: scale(1) rotateY(0deg);
    }
    50% {
      transform: scale(1.2) rotateY(180deg);
    }
    100% {
      transform: scale(1) rotateY(360deg);
    }
  }
`;

const GlowEffect = styled.div<{ active: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(150, 230, 161, ${(props) => (props.active ? "0.6" : "0.1")}) 0%,
    rgba(150, 230, 161, 0) 70%
  );
  filter: blur(15px);
  z-index: -1;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 0.5s ease, background 0.5s ease;
  animation: ${(props) =>
    props.active ? "enhancedPulse 3s infinite ease-in-out" : "none"};

  @keyframes pulse {
    0%,
    100% {
      opacity: 0.5;
      transform: translate(-50%, -50%) scale(0.9);
    }
    50% {
      opacity: 0.8;
      transform: translate(-50%, -50%) scale(1.1);
    }
  }

  @keyframes enhancedPulse {
    0%,
    100% {
      opacity: 0.7;
      transform: translate(-50%, -50%) scale(0.9);
    }
    50% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1.2);
    }
  }
`;

const CollectionStatus = styled.div`
  margin: 1rem auto;
  text-align: center;
`;

const CollectPrompt = styled.p`
  font-size: 1.2rem;
  color: #a7f3d0;
  animation: fadeInOut 2s infinite ease-in-out;

  @keyframes fadeInOut {
    0%,
    100% {
      opacity: 0.7;
    }
    50% {
      opacity: 1;
    }
  }
`;

const CollectedMessage = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #96e6a1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  animation: popIn 0.5s ease-out;

  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background: #96e6a1;
    color: #0d1d12;
    border-radius: 50%;
  }

  @keyframes popIn {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    70% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const BackButton = styled.button`
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  background: rgba(150, 230, 161, 0.2);
  color: #a7f3d0;
  border: 1px solid #a7f3d0;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(150, 230, 161, 0.3);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;
