import Card from '../Card/Card';
import { useContext } from 'react';
import { GlobalContext } from "../../App";
import styled from '@emotion/styled';
import { ErrorMessage } from "../errorMessage/ErrorMessage";
import { MoviesContainer } from './../movies/Movies.element'
import { BackButton } from '../backButton/BackButton';

const TitleContainer = styled.div`
	padding:20px 0px 0px 0px;
	display: block;
	width: 100%;
	margin: 1rem;
	mix-blend-mode: normal;
	font-family: 'GilroyBold';
	font-size: 22px;
	text-align: center;
	opacity: 0.75;
	/* border: 1px solid green; */
`

const FavoriteMovies = () => {
	const {moviesData, movieGenres, likesList} = useContext(GlobalContext);	
	const favoriteMovies = likesList.map(likedId => (
		moviesData.find(movie => movie.id === likedId)
	));

	return (
		<MoviesContainer>
		<TitleContainer> Favorite Movies </TitleContainer>
		<BackButton isShowingBackText={false}/>
		{
			 favoriteMovies.length > 0 ? favoriteMovies.map((movie) => 
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
			: <ErrorMessage message = "You haven't added any movie to this section"/>	
		} 
	  </MoviesContainer>
	)
}

export default FavoriteMovies;
