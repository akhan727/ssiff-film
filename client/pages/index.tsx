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
    console.log('%%%%%LANDING%%%%% !currentUser');
  } else {
    console.log('%%%%%LANDING%%%%% currentUser');
  }

  return (
    <>
      <Layout currentUser={currentUser}>
        <div className="landing">
          <Image src="/ssiff-logo-2021.png" alt="main-logo" width="1200" height="654"/>
        </div>
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
