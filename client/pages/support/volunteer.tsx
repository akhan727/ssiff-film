import React from 'react'
import { NextPage } from 'next'
import Image from 'next/image'
import { Layout } from '../../components/Layout'
import { withAuthServerSideProps } from '../../hocs/withAuthServerSideProps'

interface Props extends CurrentUserResponse {}

export const VolunteerPage: NextPage<Props> = ({ currentUser }) => {
	return (
		<>
		  <Layout currentUser={currentUser} title='Volunteer at SSIFF'>
		  	<h1 className="page__title__custom">VOLUNTEER AT SSIFF</h1>
				<div className="animated-gif">
            <Image src="/animated-claps.gif" alt="claps-gif" width="323" height="354"/>
        </div>
				<h1 className="page__title__custom">COMING SOON!</h1>
      </Layout>
		</>
	)
}

export const getServerSideProps = withAuthServerSideProps()

export default VolunteerPage