import React from 'react'

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
    <div className="movie-list">
			{movies.map((movie: any, index: number) => (
				<div className='movie-list-item'>
					<img key={index} src={movie.Poster} alt='movie'></img>
				</div>
			))}
    </div>
		</>
	)
}

export default MovieList