import React from 'react';
import { NextPage } from 'next';
import Layout from '../components/Layout';
import { withAuthServerSideProps } from '../hocs/withAuthServerSideProps';
import Image from 'next/image';

interface Props extends CurrentUserResponse {}

const LandingPage: NextPage<Props> = ({ currentUser }) => {
  return (
    <>
      <Layout currentUser={currentUser} title='Home'>
        
        {currentUser && (
          <div className="ssiff-logo">
            <div className="ssiff-logo__gif">
              <Image src="/trippy.gif" alt="trippy-gif" width="916" height="498.16"/>
            </div>
            <div className="ssiff-logo__svg">
              <Image src="/ssiff-logo-2021.svg" alt="main-logo" width="1300" height="707"/>
            </div>
            <div className="ssiff-logo__svg">
              <Image src="/audience.svg" alt="audience-logo" width="1299" height="482"/>
            </div>
          </div>
        )}
        {!currentUser && (
          <>
            <div className="ssiff-logo__svg">
              <Image src="/ssiff-logo-2021.svg" alt="main-logo" width="1300" height="707"/>
            </div>
          </>
        )}
        
      </Layout>
    </>
  );
};

export const getServerSideProps = withAuthServerSideProps();

export default LandingPage;
