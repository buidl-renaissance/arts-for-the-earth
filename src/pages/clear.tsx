import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";

const ClearPage: React.FC = () => {
  const [collectedCoins, setCollectedCoins] = useState<string[]>([]);
  const [cleared, setCleared] = useState(false);

  useEffect(() => {
    // Get collected coins from localStorage
    const storedCoins = JSON.parse(
      localStorage.getItem("collectedCoins") || "[]"
    );
    setCollectedCoins(storedCoins);
  }, []);

  const handleClearCollection = () => {
    // Clear the collection from localStorage
    localStorage.removeItem("collectedCoins");
    setCollectedCoins([]);
    setCleared(true);
  };

  return (
    <Container>
      <Head>
        <title>Clear Collection | Earth Day Detroit</title>
        <meta name="description" content="Clear your collected coins" />
      </Head>

      <BackgroundGradient />

      <Content>
        <Header>
          <MainTitle>Clear Collection</MainTitle>
          <Description>
            This will clear all your collected coins. This action cannot be undone.
          </Description>
        </Header>

        <StatusSection>
          {collectedCoins.length > 0 ? (
            <StatusMessage>
              You currently have {collectedCoins.length} collected coin(s).
            </StatusMessage>
          ) : cleared ? (
            <StatusMessage>Your collection has been cleared.</StatusMessage>
          ) : (
            <StatusMessage>You don&apos;t have any collected coins.</StatusMessage>
          )}
        </StatusSection>

        <ButtonsContainer>
          {collectedCoins.length > 0 && (
            <ClearButton onClick={handleClearCollection}>
              Clear Collection
            </ClearButton>
          )}
          <BackButton href="/">Back to Home</BackButton>
        </ButtonsContainer>
      </Content>
    </Container>
  );
};

export default ClearPage;

// Styled components
const Container = styled.div`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const BackgroundGradient = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, #0d1d12 0%, #1a3a24 100%);
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
  flex: 1;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`;

const MainTitle = styled.h1`
  font-size: 2.5rem;
  color: #a7f3d0;
  margin-bottom: 1rem;
  text-shadow: 0 0 10px rgba(167, 243, 208, 0.5);
`;

const Description = styled.p`
  color: #d1fae5;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const StatusSection = styled.div`
  margin: 2rem 0;
  padding: 1.5rem;
  background: rgba(26, 42, 31, 0.7);
  border-radius: 0.75rem;
  border: 1px solid rgba(150, 230, 161, 0.3);
  width: 100%;
  max-width: 500px;
`;

const StatusMessage = styled.p`
  color: #d1fae5;
  font-size: 1.2rem;
  text-align: center;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 300px;
`;

const ClearButton = styled.button`
  background: rgba(220, 38, 38, 0.8);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(220, 38, 38, 1);
    transform: translateY(-2px);
  }
`;

const BackButton = styled(Link)`
  background: rgba(150, 230, 161, 0.2);
  color: #a7f3d0;
  border: 1px solid #a7f3d0;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  text-decoration: none;

  &:hover {
    background: rgba(150, 230, 161, 0.3);
    transform: translateY(-2px);
  }
`;
