import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';

export default () => {
  return (
    <>
      <Layout />
      <Image src="/ssiff-logo-medium.png" alt="main-logo" width="1440" height="810"/>
    </>
  ); 
};

