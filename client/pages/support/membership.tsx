import React from 'react'
import { NextPage } from 'next'
import Image from 'next/image'
import { Layout } from '../../components/Layout'
import { withAuthServerSideProps } from '../../hocs/withAuthServerSideProps'

interface Props extends CurrentUserResponse {}

export const MembershipPage: NextPage<Props> = ({ currentUser }) => {
	return (
		<>
		  <Layout currentUser={currentUser} title='SSIFF Membership'>
		  	<h1 className="page__title__custom">BECOME A SSIFF MEMBER</h1>
				<div className="animated-gif">
            <Image src="/animated-film.gif" alt="film-gif" width="338" height="240"/>
        </div>
				<h1 className="page__title__custom">COMING SOON!</h1>
      </Layout>
		</>
	)
}

export const getServerSideProps = withAuthServerSideProps()

export default MembershipPage