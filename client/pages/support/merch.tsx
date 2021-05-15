import React from 'react'
import { NextPage } from 'next'
import Image from 'next/image'
import { Layout } from '../../components/Layout'
import { withAuthServerSideProps } from '../../hocs/withAuthServerSideProps'

interface Props extends CurrentUserResponse {}

export const MerchPage: NextPage<Props> = ({ currentUser }) => {
	return (
		<>
		  <Layout currentUser={currentUser} title='SSIFF Merch'>
		  	<h1 className="page__title__custom">SSIFF MERCH</h1>
				<div className="animated-gif">
            <Image src="/animated-cart.gif" alt="cart-gif" width="361" height="306"/>
        </div>
				<h1 className="page__title__custom">COMING SOON!</h1>
      </Layout>
		</>
	)
}

export const getServerSideProps = withAuthServerSideProps()

export default MerchPage