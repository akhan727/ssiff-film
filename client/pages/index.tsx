import React from 'react';
import { NextPage } from 'next';
//import Link from 'next/link';
import Layout from '../components/Layout';
//import { withAuthServerSideProps } from '../hocs/withAuthServerSideProps';
import Image from 'next/image';

const Index: NextPage<CurrentUserResponse> = ({ currentUser }) => {
  return (
    <>
      <Layout currentUser={currentUser} />
      <div className="main-header">
        <Image src="/ssiff-logo-medium.png" alt="main-logo" width="1200" height="675"/>
      </div>
      <h1>oh hi!</h1>
      <h1>oh hi!</h1>
      <h1>oh hi!</h1>
      <h1>oh hi!</h1>
      <h1>oh hi!</h1>
      <h1>oh hi!</h1>
      <h1>oh hi!</h1>
      <h1>oh hi!</h1>
      <h1>oh hi!</h1>
      <h1>oh hi!</h1>
      <h1>oh hi!</h1>
    </>
  );
};

export default Index;
