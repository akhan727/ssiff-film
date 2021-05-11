import React from 'react'
import { NextPage } from 'next'
import Image from 'next/image'
import { Layout } from '../../components/Layout'
import { DonationForm } from '../../components/DonationForm'
import { withAuthServerSideProps } from '../../hocs/withAuthServerSideProps'

interface Props extends CurrentUserResponse {}

export const DonatePage: NextPage<Props> = ({ currentUser }) => {
	return (
		<>
		  <Layout currentUser={currentUser} title='Donate to SSIFF'>
		  	<h1 className="page__title__custom">DONATE TO SSIFF</h1>
          
				<div className="animated-gif__custom">
            <Image src="/animated-heart.gif" alt="heart-gif" width="298" height="235"/>
        </div>

				<div className="page__statement">
					<p>
						SSIFF is a non-profit 501(c)(3) membership and donor-driven organization, dedicated to enriching the cultural landscape of America through the cinematic arts. We rely on the generous support of our members and donors to sustain and grow. By donating to SSIFF you are keeping our organization alive. 
					</p>
				</div>
				<DonationForm />
      </Layout>
		</>
	)
}

export const getServerSideProps = withAuthServerSideProps()

export default DonatePage