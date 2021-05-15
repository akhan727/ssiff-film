import React from 'react'
import { NextPage } from 'next'
import { Layout } from '../../components/Layout'
import { ContactForm } from '../../components/ContactForm'
import { withAuthServerSideProps } from '../../hocs/withAuthServerSideProps'

interface Props extends CurrentUserResponse {}

export const ContactPage: NextPage<Props> = ({ currentUser }) => {
	return (
		<>
		  <Layout currentUser={currentUser} title='Contact SSIFF'>
				<ContactForm />
      </Layout>
		</>
	)
}

export const getServerSideProps = withAuthServerSideProps()

export default ContactPage