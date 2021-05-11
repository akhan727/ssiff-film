import React from 'react'
import Image from 'next/image'
import { NextPage } from 'next'
import { Layout } from '../../components/Layout'
import { withAuthServerSideProps } from '../../hocs/withAuthServerSideProps'

interface Props extends CurrentUserResponse {}

export const AboutPage: NextPage<Props> = ({ currentUser }) => {
	return (
		<>
		  <Layout currentUser={currentUser} title='About SSIFF'>
		  	<h1 className="page__title__custom">SSIFF's MISSION</h1>

				<div className="animated-gif__custom">
            <Image src="/animated-glass.gif" alt="glass-gif" width="300" height="300"/>
        </div>

				<div className="page__statement">
					<p>
						As a year-round non-profit cultural and educational organization, SSIFF is dedicated to engaging communities with remarkable cinematic experiences. We believe film is transformative and ultimately serves the purpose of promoting empathy and understanding in an increasingly diverse and complex world. We are committed to treating all individuals with respect, dignity and fairness by removing physical, social and economic barriers to enjoying the SSIFF experience. 
					</p>
				</div>


      </Layout>
		</>
	)
}

export const getServerSideProps = withAuthServerSideProps()

export default AboutPage