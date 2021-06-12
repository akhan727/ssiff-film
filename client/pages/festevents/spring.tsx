import axios from 'axios';
import React from 'react'
import { NextPage } from 'next'
import { Layout } from '../../components/Layout'
import { withAuthServerSideProps } from '../../hocs/withAuthServerSideProps'
import { MovieCard } from '../../components/MovieCard'
import Image from 'next/image'

interface Props extends CurrentUserResponse {
  films: GetFilmsResponse;
}

export const SpringPage: NextPage<Props> = ({ currentUser, films }) => {
	
	return (
		<>
		  <Layout currentUser={currentUser} title='SSIFF21 Spring Festival'>
		  	<h1 className="page__title">SSIFF21 SPRING FESTIVAL</h1>
        <h1 className="page__subtitle">MAY 28-30, 2021</h1>
        <div className="ssiff-logo">
          <div className="ssiff-logo__gif">
            <Image src="/forest-rain.gif" alt="forest-rain-gif" width="928" height="504"/>
          </div>
          <div className="ssiff-logo__underlay">
            <Image src="/korean-horror-logo-underlay.svg" alt="spring-underlay-logo" width="928" height="586.4049"/>
          </div>
          <div className="ssiff-logo__svg">
            <Image src="/korean-horror-logo.svg" alt="spring-logo" width="928" height="586.4049"/>
          </div>
          <div className="page__statement">
            <p>
              During Asian American and Pacific Islander Heritage Month in May, we will be celebrating the finest in contemporary Korean horror cinema from the late 1990s to today. With Bong Joon-ho’s Parasite sweeping four major categories at the 2020 Academy Awards including Best Picture, Best Director, Best Original Screenplay, and Best International Feature, this South Korean masterpiece has got many Americans and other countries more interested in Korean cinema, especially the horror and thriller genres. From ghosts to monsters to serial killers, aesthetic cinematography, and in-your-face scares, Korea has carved out its own distinct place in horror cinema.
            </p>
				  </div>
        </div>
        <div className="movie__list">
          {films.map((film: any) => (
            <MovieCard 
              film={film}
              key={film.id}
            />
          ))}
        </div>

      </Layout>
		</>
	)
}

export const getServerSideProps = withAuthServerSideProps<{
  films: GetFilmsResponse;
}>(async context => {
  const { data } = await axios.get<GetFilmsResponse>(
    //'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/films',
    'http://www.ssiff-film.org/api/films',
    {
      headers: context.req.headers
    }
  );

  return { props: { films: data } };
});

export default SpringPage