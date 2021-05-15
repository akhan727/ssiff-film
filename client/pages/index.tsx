import React from 'react';
//import axios from 'axios';
import { NextPage } from 'next';
//import Link from 'next/link';
import Layout from '../components/Layout';
import { withAuthServerSideProps } from '../hocs/withAuthServerSideProps';
import Image from 'next/image';

interface Props extends CurrentUserResponse {}

const LandingPage: NextPage<Props> = ({ currentUser }) => {
  
  console.log('^^^^^LANDING PAGE^^^^^ current user: ', currentUser)
  if (!currentUser) {
    console.log('^^^^^LANDING PAGE^^^^^ !currentUser');
  } else {
    console.log('^^^^^LANDING PAGE^^^^^ currentUser');
  }

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

/*
export const getServerSideProps = withAuthServerSideProps<{
  tickets: GetTicketsResponse;
}>(async context => {
  const { data } = await axios.get<GetTicketsResponse>(
    'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/tickets',
    {
      headers: context.req.headers
    }
  );

  return { props: { tickets: data } };
});
*/

export const getServerSideProps = withAuthServerSideProps();

export default LandingPage;
