import type { FunctionComponent } from 'react';

interface Props {
  result: any;
}

export const MovieCard: FunctionComponent<Props> = ({ result }: Props) => {
	return (
		<>
			<div className='movie__listing'>
				
				<div className='movie__listing__image'>
					<img src={'https://www.themoviedb.org/t/p/original/qFdhMRDRqZgIbXnMfy9s4ODzP6W.jpg'} alt='movie' width="300" height="169"  className='movie__listing__img'></img>
				</div>
				
				<div className='movie__listing__info'> 
					<div className="movie__listing__info__title">
						<p>{result.title}</p>
					</div>
					<p>director</p>
					<p>{result.runtime} min&ensp;|&ensp;{result.production_countries[0].name}&ensp;|&ensp;{`(${new Date(result.release_date).getFullYear()})`}</p>
					<div className="movie__listing__info__synopsis">
						<p>{result.overview}</p>
					</div>
					<div>
						<p>venue<br/>datetime</p>
					</div>
					<div className="movie__listing__info__price">
						<p>$1</p>
					</div>
					<button className="button__ticket">ADD TO CART</button>
				</div>
			
			</div>
		</>
	)
}

export default MovieCard