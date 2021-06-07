import type { FC } from 'react';
import { Schedules } from '../MovieCard/schedules'

interface Props {
  film: any;
}

export const MovieCard: FC<Props> = ({ film }: Props) => {
	return (
		<>
			<div className='movie__listing'>
				
				<div className='movie__listing__image'>
					<img src={film.backdrop} alt='movie' width="300" height="169"  className='movie__listing__img'></img>
				</div>
				
				<div className='movie__listing__info'> 
					<div className="movie__listing__info__title">
						<p>{film.title}</p>
					</div>
					<p>{film.director}</p>
					<p>{film.runtime}&nbsp;min&ensp;|&ensp;{film.country}&ensp;|&ensp;{film.releaseYear}</p>
					<div className="movie__listing__info__synopsis">
						<p>{film.synopsis}</p>
					</div>
					{film.schedules.map((schedule: any) => (
            <Schedules 
              schedule={schedule}
              key={schedule.id}
            />
          ))}
					<button className="button__ticket">ADD TO CART</button>
				</div>
			
			</div>
		</>
	)
}

export default MovieCard