import React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";

const CollectPage = () => {
  return (
    <>
      <Head>
        <title>Collect Art For The Earth Coin | Celebrate Earth Detroit</title>
      </Head>
    </>
  );
};

export default CollectPage;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/collect/earth-day',
      permanent: false,
    },
  };
};

