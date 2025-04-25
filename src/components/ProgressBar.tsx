import React, { useEffect } from "react";
import styled from "styled-components";
import { Collectible } from "@/mockCoins";

interface ProgressBarProps {
  collectibles: Collectible[];
  getCollectionStatus: (id: string) => boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ collectibles, getCollectionStatus }) => {
  const collectedCount = collectibles.filter(collectible => getCollectionStatus(collectible.id)).length;
  const totalCount = collectibles.length;
  const progressPercentage = (collectedCount / totalCount) * 100;

  useEffect(() => {
    // Listen for storage events to update progress when a new coin is collected
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'collectedCoins') {
        // Force re-render when collection status changes
        const forceUpdate = () => {};
        forceUpdate();
      }
    };

    // Add event listener for storage changes
    window.addEventListener('storage', handleStorageChange);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [progressPercentage]);

  return (
    <CollectionProgressContainer>
      <ProgressText>
        {collectedCount} of {totalCount} Collected
      </ProgressText>
      <ProgressBarContainer>
        <ProgressFill 
          width={`${progressPercentage}%`}
        />
      </ProgressBarContainer>
    </CollectionProgressContainer>
  );
};

export default ProgressBar;

const CollectionProgressContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProgressText = styled.div`
  font-size: 0.9rem;
  color: #a7f3d0;
  margin-bottom: 0.5rem;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 10px;
  background-color: rgba(167, 243, 208, 0.2);
  border-radius: 5px;
  overflow: hidden;
`;

const ProgressFill = styled.div<{ width: string }>`
  height: 100%;
  width: ${props => props.width};
  background: linear-gradient(to right, #d4fc79 0%, #96e6a1 100%);
  border-radius: 5px;
  transition: width 0.5s ease-in-out;
`;