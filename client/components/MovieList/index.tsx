import React from 'react'

interface Props {
  movies: any;
  setMovies(movies: any): void;
}

export const MovieList: React.FC<Props> = ({
  movies,
  setMovies,
}) => {
	return (
		<>
    <div className="movie__list">
			{movies.map((movie: any, index: number) => (
				<div className='movie__listing'>
					
					<div className='movie__listing__image'>
						<img key={index} src={movie.image} alt='movie' width="300" height="169"  className='movie__listing__img'></img>
					</div>
					
					<div className='movie__listing__info'> 
						<div className="movie__listing__info__title">
							<p>{movie.title}</p>
						</div>
						<p>{movie.director}</p>
						<p>{movie.length}&ensp;|&ensp;{movie.country}&ensp;|&ensp;{movie.year}</p>
						<div className="movie__listing__info__synopsis">
							<p>{movie.synopsis}</p>
						</div>
						<div>
							<p>{movie.venue}<br/>{movie.datetime}</p>
						</div>
						<p>{movie.price}</p>
						<button className="button__ticket">ADD TO CART</button>
					</div>
				
				</div>
			))}
    </div>
		</>
	)
}

export default MovieList