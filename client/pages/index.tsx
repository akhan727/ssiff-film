import React from 'react';
import axios from 'axios';
import { NextPage } from 'next';
//import Link from 'next/link';
import Layout from '../components/Layout';
import { withAuthServerSideProps } from '../hocs/withAuthServerSideProps';
import Image from 'next/image';


const Landing: NextPage<CurrentUserResponse> = ({ currentUser }) => {
  console.log('User Status: ',currentUser);

  if (!currentUser) {
    console.log('%%%%%LANDING%%%%% !currentUser');
  } else {
    console.log('%%%%%LANDING%%%%% currentUser');
  }

  return (
    <>
      <Layout currentUser={currentUser}>
        <div className="landing">
          <Image src="/ssiff-logo-2021.png" alt="main-logo" width="1200" height="668"/>
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps = withAuthServerSideProps<{
  userStatus: CurrentUserResponse;
}>(async context => {
  console.log('$$$$$$$$$$$$$$$$$$$$$$$');
  const { data } = await axios.get<CurrentUserResponse>(
    'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser',
    {
      headers: context.req.headers
    }
  );

  return { props: { userStatus: data } };
});

export default Landing;
