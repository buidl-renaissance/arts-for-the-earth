import React, { useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import Image from "next/image";

const CollectPage = () => {
  const [isCollected, setIsCollected] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [isFadedOut, setIsFadedOut] = useState(true);
  const [isGlowing, setIsGlowing] = useState(false);

  const handleCollect = () => {
    if (isCollected) return;
    
    setIsSpinning(true);
    setIsFadedOut(false);
    
    // Spin for 3 seconds before showing collected state
    setTimeout(() => {
      setIsSpinning(false);
      setIsCollected(true);
      setIsGlowing(true);
    }, 3000);
  };

  return (
    <Container>
      <Head>
        <title>Collect Earth Day Coin | Earth Day Detroit</title>
        <meta
          name="description"
          content="Collect your digital Earth Day coin to commemorate Earth Day Detroit"
        />
      </Head>

      <BackgroundGradient />

      <Content>
        <Header>
          <MainTitle>Earth Day Digital Coin</MainTitle>
          <p>
            Collect this special digital coin to commemorate Earth Day Detroit
          </p>
        </Header>

        <CoinContainer onClick={handleCollect} interactive={!isCollected}>
          <CoinWrapper 
            spinning={isSpinning} 
            collected={isCollected} 
            fadedOut={isFadedOut}
            glowing={isGlowing}
          >
            <Image
              src="/arts-for-earth-blank.png"
              alt="Earth Day Digital Coin"
              width={250}
              height={250}
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
            <CollectPrompt>Tap the coin to collect</CollectPrompt>
          )}
        </CollectionStatus>
      </Content>
    </Container>
  );
};

export default CollectPage;

const Container = styled.div`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BackgroundGradient = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #1a2a1f 0%, #0d1d12 100%);
  z-index: -2;
`;

const Content = styled.main`
  width: 100%;
  max-width: 56rem;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const Header = styled.header`
  text-align: center;
  width: 100%;
  max-width: 56rem;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  padding: 0.5rem;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 0.75rem;
    margin-top: 0.75rem;
    margin-bottom: 2rem;
    color: #a7f3d0;
    max-width: 90%;
  }

  @media (min-width: 640px) {
    padding: 1rem;
    padding-top: 2rem;

    p {
      font-size: 0.875rem;
      margin-top: 1rem;
      max-width: 100%;
    }
  }
`;

const MainTitle = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  font-family: var(--font-cambria);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background: linear-gradient(to right, #d4fc79 0%, #96e6a1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.6),
    0 0 20px rgba(212, 252, 121, 0.4);
  animation: glowFade 3s ease-in-out infinite alternate;
  line-height: 1.1;

  @media (min-width: 640px) {
    font-size: 3rem;
    margin-bottom: 0.75rem;
  }
  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const CoinContainer = styled.div<{ interactive: boolean }>`
  position: relative;
  width: 250px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.interactive ? "pointer" : "default")};
  transition: transform 0.3s ease;

  &:hover {
    transform: ${(props) => (props.interactive ? "scale(1.05)" : "none")};
  }

  @media (min-width: 640px) {
    width: 250px;
    height: 250px;
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
    filter: drop-shadow(0 0 ${props => props.glowing ? '20px' : '10px'} rgba(150, 230, 161, ${props => props.glowing ? '0.8' : '0.5'}));
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
    rgba(150, 230, 161, ${props => props.active ? '0.6' : '0.1'}) 0%,
    rgba(150, 230, 161, 0) 70%
  );
  filter: blur(15px);
  z-index: -1;
  opacity: ${props => props.active ? 1 : 0};
  transition: opacity 0.5s ease, background 0.5s ease;
  animation: ${props => props.active ? 'enhancedPulse 3s infinite ease-in-out' : 'none'};

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
  margin-top: 2rem;
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
