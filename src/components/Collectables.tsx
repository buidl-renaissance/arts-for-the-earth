import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { mockCoins } from "@/mockCoins";

const getCollectionStatus = (coinId: string) => {
  const collectedCoins = JSON.parse(localStorage.getItem("collectedCoins") || "[]");
  return collectedCoins.includes(coinId);
};

const Collectables = () => {
  return (
    <CollectablesContainer>
      <CollectablesTitle>Digital Collectibles</CollectablesTitle>
      <CollectablesGrid>
        {Object.values(mockCoins).map((collectible) => (
          <CollectibleItem key={collectible.id}>
            <Link href={`/collect/${collectible.id}`}>
              <CollectibleContent collected={getCollectionStatus(collectible.id)}>
                <CollectibleImageWrapper>
                  <Image
                    src={collectible.image}
                    alt={collectible.title}
                    width={150}
                    height={150}
                    className="collectible-image"
                  />
                  {getCollectionStatus(collectible.id) && <CollectedBadge>✓</CollectedBadge>}
                </CollectibleImageWrapper>
                <CollectibleName>{collectible.title}</CollectibleName>
                <CollectibleStatus>
                  {getCollectionStatus(collectible.id) ? "Collected" : "Tap to collect"}
                </CollectibleStatus>
              </CollectibleContent>
            </Link>
          </CollectibleItem>
        ))}
      </CollectablesGrid>
    </CollectablesContainer>
  );
};

export default Collectables;

const CollectablesContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const CollectablesTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  font-family: var(--font-cambria);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background: linear-gradient(to right, #d4fc79 0%, #96e6a1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.6),
    0 0 20px rgba(212, 252, 121, 0.4);
`;

const CollectablesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CollectibleItem = styled.div`
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const CollectibleContent = styled.div<{ collected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  border-radius: 1rem;
  background: rgba(26, 42, 31, 0.7);
  border: 2px solid ${props => props.collected ? '#96e6a1' : 'rgba(167, 243, 208, 0.3)'};
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(26, 42, 31, 0.9);
    box-shadow: 0 0 15px rgba(150, 230, 161, 0.3);
  }
`;

const CollectibleImageWrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
  
  .collectible-image {
    border-radius: 50%;
    object-fit: contain;
    filter: drop-shadow(0 0 10px rgba(150, 230, 161, 0.5));
  }
`;

const CollectedBadge = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  background: #96e6a1;
  color: #0d1d12;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1rem;
`;

const CollectibleName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #d4fc79;
`;

const CollectibleStatus = styled.p`
  font-size: 0.875rem;
  color: #a7f3d0;
`;
