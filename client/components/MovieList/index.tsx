import React from 'react'
//import { Button } from 'react-bootstrap'

interface Props {
  movies: any;
  setMovies(movies: any): void;
}

export const MovieList: React.FC<Props> = ({
  movies,
  setMovies 
}) => {
	return (
		<>
    <div className="movie__list__spring21">
			{movies.map((movie: any, index: number) => (
				<div className='movie__listing__spring21'>
					<div className='movie__listing__image'>
						<img key={index} src={movie.image} alt='movie' width="300" height="169"  className='movie__listing__img'></img>
					</div>
					<div className='movie__listing__info'>
						<p className="movie__listing__info__title">
							{movie.title}
						</p>
						<p> 
							<br/>
							{movie.director}
							<br/>
							<br/>
							{movie.length}&ensp;|&ensp;{movie.country}&ensp;|&ensp;{movie.year}
							<br/>
							<br/>
						</p>
						<div className="movie__listing__info__synopsis">
							<p>
								{movie.synopsis}
							</p>
						</div>
						<br/>
						<div className="movie__listing__info__venue">
							<p>
								{movie.venue}<br/>{movie.datetime}
							</p>
						</div>
						<br/>
						<button className="button__ticket">Buy Ticket(s)</button>
					</div>
				</div>
			))}
    </div>
		</>
	)
}

export default MovieList