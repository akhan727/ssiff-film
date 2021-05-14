import React from 'react'
import { NextPage } from 'next'
//import Head from 'next/head'
import { Layout } from '../../components/Layout'
import { withAuthServerSideProps } from '../../hocs/withAuthServerSideProps'

interface Props extends CurrentUserResponse {}

export const ProfilePage: NextPage<Props> = ({ currentUser }) => {
	return (
		<>
		  <Layout currentUser={currentUser} title='Profile'>
		  	<h1 className="page__title">Profile Settings</h1>
      </Layout>
		</>
	)
}

export const getServerSideProps = withAuthServerSideProps()

export default ProfilePage