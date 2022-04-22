import Card from '../Card/Card';
import { useContext } from 'react';
import { GlobalContext } from "../../App";
import styled from '@emotion/styled';
import SearchingBar from '../searchingBar/SearchingBar';
import Spinner from '../spinner/Spinner';
import ErrorMessage from "../errorMessage/ErrorMessage";

const MoviesContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`


const Movies = () => {
	const {isLoading, moviesData, movieGenres} = useContext(GlobalContext);

	return (
	  <MoviesContainer className='movies'>
		<SearchingBar/>
		{isLoading && <Spinner/>}
		{
			 moviesData?.length > 0 ? moviesData.map((movie) => 
					<Card 
						key={movie.id}
						name={movie.title}
						genresIds={movie.genre_ids}
						genresList={movieGenres}
						reviews={movie.popularity}
						duration={movie.duration}
						score={movie.vote_average}
						poster = {movie.poster_path}
						id={movie.id}
					/>
			) 
			: <ErrorMessage/>
		} 
	  </MoviesContainer>
  )
}

export default Movies;
