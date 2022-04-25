import Card from '../Card/Card';
import { useContext } from 'react';
import { GlobalContext } from "../../App";
import SearchingBar from '../searchingBar/SearchingBar';
import Spinner from '../spinner/Spinner';
import { ErrorMessage } from "../errorMessage/ErrorMessage";
import { Link } from 'react-router-dom';
import { MoviesContainer, FavoritesButton, FavButtonContainer  } from './Movies.element'


const Movies = () => {
	const {isLoading, moviesData, movieGenres} = useContext(GlobalContext);

	return (
	<>
		<MoviesContainer className='movies'>
			<SearchingBar/>
			<FavButtonContainer>
				<Link to={`/favorites`}>
					<FavoritesButton>Favorites</FavoritesButton>
				</Link>
			</FavButtonContainer>
			{isLoading && <Spinner/>}
			{!isLoading && (
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
				:<ErrorMessage/>)
			} 
		</MoviesContainer>
	</>
  )
}

export default Movies;
