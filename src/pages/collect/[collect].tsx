import React from "react";
import styled from "styled-components";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { mockCoins } from "@/mockCoins";
import Collectables from "@/components/Collectables";
import Collectible from "@/components/Collectible";

type CoinData = {
  id: string;
  title: string;
  description: string;
  image: string;
};

type CollectPageProps = {
  coinData: CoinData;
};

const CollectPage = ({ coinData }: CollectPageProps) => {
  return (
    <Container>
      <Head>
        <title>{coinData.title} | Earth Day Detroit</title>
        <meta
          name="description"
          content={coinData.description}
        />
      </Head>

      <BackgroundGradient />

      <Content>
        <Header>
          <MainTitle>{coinData.title}</MainTitle>
          <p>{coinData.description}</p>
        </Header>

        <Collectible coinData={coinData} />
        
        <Collectables />
      </Content>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { collect } = context.params || {};
  const coinId = typeof collect === 'string' ? collect : '';
  
  // Get coin data from mock data
  const coinData = mockCoins[coinId as keyof typeof mockCoins] || mockCoins["earth-day"]; // Default to earth-day if not found
  
  return {
    props: {
      coinData,
    },
  };
};

export default CollectPage;

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
