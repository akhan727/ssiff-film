import type { FunctionComponent } from 'react';

interface Props {
  movie: any;
}

export const MovieCard: FunctionComponent<Props> = ({ movie }: Props) => {
	return (
		<>
			<div className='movie__listing'>
				
				<div className='movie__listing__image'>
					<img src={movie.image} alt='movie' width="300" height="169"  className='movie__listing__img'></img>
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
					<div className="movie__listing__info__price">
						<p>{movie.price}</p>
					</div>
					<button className="button__ticket">ADD TO CART</button>
				</div>
			
			</div>
		</>
	)
}

export default MovieCard