import React, { useState } from 'react';
import { NextPage } from 'next'
import { Layout } from '../../components/Layout'
import { withAuthServerSideProps } from '../../hocs/withAuthServerSideProps'
import { MovieList } from '../../components/MovieList'
import Image from 'next/image'

interface Props extends CurrentUserResponse {}

export const SpringPage: NextPage<Props> = ({ currentUser }) => {
	const [movies, setMovies] = useState([
    {
      "id": "293670",
      "title": "The Wailing",
      "country": "KOREA",
      "year": "2016",
      "director": "Na Hong-jin",
      "screenwriter": "Na Hong-jin",
      "length": "156 min",
      "synopsis": "A stranger arrives in a little village and soon after a mysterious sickness starts spreading. A policeman is drawn into the incident and is forced to solve the mystery in order to save his daughter.",
      "venue": "Denver Mart Drive In",
      "datetime": "28-MAY 7:00 PM",
      "price": "$10",
      "image": "https://www.themoviedb.org/t/p/original/qFdhMRDRqZgIbXnMfy9s4ODzP6W.jpg"
    },
    {
      "id": "41401",
      "title": "Cinderella",
      "country": "KOREA",
      "year": "2006",
      "director": "Bong Man-dae",
      "screenwriter": "Son Kwang-soo",
      "length": "94 min",
      "synopsis": "Though she has never once seen her father, Hyun-soo has never felt his absense, as there is a perfect mother for her. Her mother is also a renowned plastic surgeon, so she is never lonely, surrounded by girls who want beauty consultations from her mother. But her happiness comes to an end as her friends who have received facial surgery from her mother start to commit mysterious suicides by cutting out their faces. She also starts to feel that there is someone else in the house where she lives alone with her mother. One day, she discovers a hidden basement and there, she comes to find a secret from her past, which will bring great turmoil to mother and daughter.",
      "venue": "Online Streaming",
      "datetime": "28-MAY to 30-May",
      "price": "$7",
      "image": "https://www.themoviedb.org/t/p/original/u0LLp9McFSGdGP5LThy5KC4jujp.jpg"
    },
    {
      "id": "74336",
      "title": "The Quite Family",
      "country": "KOREA",
      "year": "1998",
      "director": "Kim Jee-woon",
      "screenwriter": "Kim Jee-woon",
      "length": "98 min",
      "synopsis": "A family decides to buy a lodge in a remote hiking area. Their first customer commits suicide and the distraught family buries his body to avoid the bad publicity. But their luck gets worse, the bodies start piling up, and the family becomes frantic to rectify the situation.",
      "venue": "Rhinoceropolis",
      "datetime": "28-MAY 10:00 PM",
      "price": "$10",
      "image": "https://www.themoviedb.org/t/p/original/gGqTxNieb7GpntWmo4hlXBDHzCf.jpg"
    },
    {
      "id": "22536",
      "title": "Thirst",
      "country": "KOREA",
      "year": "2009",
      "director": "Park Chan-wook",
      "screenwriter": "Chung Seo-kyung, Park Chan-wook",
      "length": "133 min",
      "synopsis": "Sang-hyun, a respected priest, volunteers for an experimental procedure that may lead to a cure for a deadly virus. He gets infected and dies, but a blood transfusion of unknown origin brings him back to life as a vampire. Now, Sang-hyun is torn between faith and bloodlust, and has a newfound desire for Tae-ju, the wife of his childhood friend.",
      "venue": "Online Streaming",
      "datetime": "28-MAY to 30-May",
      "price": "$7",
      "image": "https://www.themoviedb.org/t/p/original/yhb312DWP9yMYoLIGxdKT4o5VlI.jpg"
    },
    {
      "id": "4552",
      "title": "A Tale of Two Sisters",
      "country": "KOREA",
      "year": "2003",
      "director": "Kim Jee-won",
      "screenwriter": "Kim Jee-won",
      "length": "115 min",
      "synopsis": "A recently released patient from a mental institution returns home with her sister, only to face disturbing events between her stepmother and the ghosts haunting their house- all of which are connected to a dark past in the family's history.",
      "venue": "Sie FilmCenter",
      "datetime": "29-MAY 6:00 PM",
      "price": "$10",
      "image": "https://www.themoviedb.org/t/p/original/tM7uHa2Km5gSakooTQsZLwit3PK.jpg"
    },
    {
      "id": "1255",
      "title": "The Host",
      "country": "KOREA",
      "year": "2006",
      "director": "Bong Joon-ho",
      "screenwriter": "Baek Chul-hyun, Bong Joon-ho, Ha Jun-won",
      "length": "120 min",
      "synopsis": "Following the dumping of gallons of toxic waste in the river, a giant mutated squid-like appears and begins attacking the populace. Gang-du's daughter Hyun-seo is snatched up by the creature; with his family to assist him, he sets off to find her.",
      "venue": "Red Rocks",
      "datetime": "30-MAY 5:00 PM",
      "price": "$10",
      "image": "https://www.themoviedb.org/t/p/original/nRS4jtrWDFrttZ95IbdPhUjByqF.jpg"
    },
    {
      "id": "49797",
      "title": "I Saw The Devil",
      "country": "KOREA",
      "year": "2010",
      "director": "Kim Jee-woon",
      "screenwriter": "Kim Jee-woon, Park Hoon-jung",
      "length": "142 min",
      "synopsis": "Kyung-chul is a dangerous psychopath who kills for pleasure. He has committed infernal serial murders in diabolic ways that one cannot even imagine and his victims range from young women to even children. The police have chased him for a long time, but were unable to catch him. One day, Joo-yeon, daughter of a retired police chief becomes his prey and is found dead in a horrific state. Her fiance Soo-hyun, a top secret agent, decides to track down the murderer himself. He promises himself that he will do everything in his power to take bloody vengeance against the killer, even if it means that he must become a monster himself to get this monstrous and inhumane killer.",
      "venue": "Sie FilmCenter",
      "datetime": "30-MAY 7:00 PM",
      "price": "$10",
      "image": "https://www.themoviedb.org/t/p/original/tW8u1dVNlGoCjXKFbTgFOqZRUki.jpg"
    },
    {
      "id": "396535",
      "title": "Train To Busan",
      "country": "KOREA",
      "year": "2016",
      "director": "Yeon Sang-ho",
      "screenwriter": "Yeon Sang-ho",
      "length": "118 min",
      "synopsis": "Martial law is declared when a mysterious viral outbreak pushes Korea into a state of emergency. Those on an express train to Busan, a city that has successfully fended off the viral outbreak, must fight for their own survival.",
      "venue": "Red Rocks",
      "datetime": "28-MAY 8:00 PM",
      "price": "$10",
      "image": "https://www.themoviedb.org/t/p/original/ngDsPRp1iLQHvmBrOgMzGXepQ1k.jpg"
    },
    {
      "id": "59421",
      "title": "Bedevilled",
      "country": "KOREA",
      "year": "2010",
      "director": "Jang Cheol-soo",
      "screenwriter": "Choi Kwan-Yeong",
      "length": "115 min",
      "synopsis": "A woman subject to mental, physical, and sexual abuse on a remote island seeks a way out.",
      "venue": "Sie FilmCenter",
      "datetime": "30-MAY 8:00 PM",
      "price": "$10",
      "image": "https://www.themoviedb.org/t/p/original/ca0E776V4Z86Smvvd0842p43hjL.jpg"
    }
  ]);
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
		  	<MovieList 
					movies={movies}
					setMovies={setMovies}
				/>
      </Layout>
		</>
	)
}

export const getServerSideProps = withAuthServerSideProps()

// TODO: 
/*
export const getServerSideProps = withAuthServerSideProps<{
  tickets: GetTicketsResponse;
}>(async context => {
  const { data } = await axios.get<GetTicketsResponse>(
    'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/tickets/${ticketId}',
    {
      headers: context.req.headers
    }
  );
  
  const id = params?.id as string;
  const movie = await getMovieDetails(id);
  const crew = await getCredits(id);

  return { props: { tickets: data, movie, crew } };
});
*/

export default SpringPage