import React from 'react'
import { NextPage } from 'next'
import Image from 'next/image'
import { Layout } from '../../components/Layout'
import { withAuthServerSideProps } from '../../hocs/withAuthServerSideProps'

interface Props extends CurrentUserResponse {}

export const HowPage: NextPage<Props> = ({ currentUser }) => {
	return (
		<>
		  <Layout currentUser={currentUser} title='How to SSIFF'>
		  	<h1 className="page__title__custom">HOW TO SSIFF</h1>
				
				<div className="animated-gif">
            <Image src="/animated-chat.gif" alt="chat-gif" width="285" height="309"/>
        </div>

				<div className="page__statement__custom">
            <p>
							SSIFF is a bi-annual film festival event held during the spring and fall season.
            </p>
				</div>

				<h1 className="page__subtitle">SPRING FESTIVAL</h1>

				<div className="page__statement">
            <p>
							Our annual spring festival features previously released films set under a super secret theme that is not revealed until the month the festival is being held. Some films will be screened at various small venues in Denver, Colorado while others will be made available for streaming online for a set time.
            </p>
				</div>

				<h1 className="page__subtitle">FALL FESTIVAL</h1>

				<div className="page__statement">
            <p>
							Our annual fall festival features new independent films held in a centralized undisclosed super secret location in Colorado that is not revealed until the month the festival is being held. Our exciting venue will also feature interactive performances and sets, carnival rides, and delicious food from local food vendors. Guests are encouraged to dress up costume.
            </p>
				</div>

				<h1 className="page__subtitle">COVID-19 STATEMENT</h1>

				<div className="page__statement">
            <p>
							Our priority is to follow State of Colorado and Colorado Department of Heath COVID-19 guidlines regarding proper social distancing and sanitation. Face coverings are required for all indoor events and screenings.
            </p>
				</div>

				<h1 className="page__subtitle">COVID-19 TIPS</h1>

				<div className="animated-gif__small">
            <Image src="/animated-mask.gif" alt="mask-gif" width="285" height="200"/>
						<Image src="/animated-sanitizer.gif" alt="sanitizer-gif" width="254" height="200"/>
        </div>

				<div className="page__statement">
					<ul>
						<li>Wash your hands before and after putting your face covering in place.</li>
						<li>Masks should completely cover the nose and mouth and fit snugly against the sides of your face without gaps.</li>
						<li>Do not touch the face covering again until you remove it.</li>
						<li>Masks should be positioned so that there is no need to adjust or otherwise touch the face frequently.</li>
						<li>If your mask becomes soiled or hard to breathe through, you should remove and not wear again until laundered.</li>
						<li>Remove your mask to eat and drink and if it is still in good repair, you may continue to use it.</li>
						<li>A mask is NOT a substitute for social distancing. Masks should still be worn in addition to staying at least six feet apart.</li>
					</ul>
				</div>

      </Layout>
		</>
	)
}

export const getServerSideProps = withAuthServerSideProps()

export default HowPage