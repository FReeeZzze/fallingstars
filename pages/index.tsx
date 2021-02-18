import React from 'react';
import Head from 'next/head';
import MainPage from 'pages/MainPage';
import styled from '@emotion/styled';

const WrapperPage = styled.div((props: { column?: boolean }): any => ({
  display: 'flex',
  flexDirection: props.column && 'column',
}));

export default function Home() {
  return (
    <WrapperPage>
      <Head>
        <title>Falling stars</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainPage />
    </WrapperPage>
  );
}
