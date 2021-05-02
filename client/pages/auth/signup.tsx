import { NextPage } from 'next';
import Router from 'next/router';
import React, { useState } from 'react';
import { AuthForm } from '../../components/AuthForm';
import Layout from '../../components/Layout';
import { withAuthServerSideProps } from '../../hocs/withAuthServerSideProps';
import useRequest from '../../hooks/useRequest';

interface Props extends CurrentUserResponse {}

export const SignUp: NextPage<Props> = ({ currentUser }) => {
  console.log('^^^^^SIGN UP^^^^^ current user: ', currentUser)
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // useRequest HOOK
  const [doRequest, errors] = useRequest<SignUpRequestBody, SignUpResponse>({
    body: { email, password },
    method: 'POST',
    url: '/api/users/signup',
    onSuccess: () => Router.push('/')
  });

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await doRequest();
  };

  return (
    <>
      <Layout currentUser={currentUser} title='Sign Up'>
        <AuthForm
          onSubmit={onSubmit}
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          errors={errors}
          type="Sign Up"
        />
      </Layout>
    </>
  );
};

export const getServerSideProps = withAuthServerSideProps();

export default SignUp;