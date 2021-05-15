import React from 'react'
import { NextPage } from 'next'
import { Layout } from '../../components/Layout'
import { withAuthServerSideProps } from '../../hocs/withAuthServerSideProps'

interface Props extends CurrentUserResponse {}

export const OrdersPage: NextPage<Props> = ({ currentUser }) => {
	return (
		<>
		  <Layout currentUser={currentUser} title='Orders'>
		  	<h1 className="page__title__custom">My Orders</h1>
      </Layout>
		</>
	)
}

export const getServerSideProps = withAuthServerSideProps()

export default OrdersPage