import React from 'react'
import { IMG_HALF_PATH_W154, IMG_UNAVAILABLE } from '../../tools/imgPaths'
import HeartIcon from '../heartIcon/HeartIcon'
import { Rating } from '../rating/Rating'
import GenreMovieDetails from '../genreMovieDetails/GenreMovieDetails'
import { getMovieGenres } from '../../tools/getMovieGenres'
import { StarRating } from '../Card/StarRating'
import { Reviews } from '../reviews/Reviews'
import MovieName from '../movieName/MovieName'
import {
	CardContainer,
	MovieImage,
	EmptyCard,
	HeartContainer,
	Genrebox,
	ReviewAndStarBox,
	StarIconsBox,
	MovieNameBox,
	MoviesDurationBox,
	OverviewContainer,
	OverviewContent,
	ButtonContainer,
	BookButton
} from './favoriteMoviesCard.element'


const FavoriteMoviesCard = ({ 
	name,
	id,
	genresIds, 
	reviews, 
	duration=90, 
	score, 
	poster, 
	genresList,
	overview 
}) => {
	const movieGenres= getMovieGenres(genresIds, genresList);
  return (
	 <CardContainer>
	 	<EmptyCard></EmptyCard>
		 <HeartContainer>
		 	<HeartIcon id={id}/>
		 </HeartContainer>
		<MovieImage src={poster ? `${IMG_HALF_PATH_W154}/${poster}`: IMG_UNAVAILABLE } alt="movieCover" />
		<Rating score={score} isShowingCard/>
		<Genrebox>
			<GenreMovieDetails movieGenres={movieGenres} isSmallFontSize/>
		</Genrebox>
		<ReviewAndStarBox>
			<StarIconsBox>
				<StarRating 
					score={score}
					size='7px'
				/>
			</StarIconsBox>
			<Reviews popularity={reviews} isReviewTextSize/>
		</ReviewAndStarBox>
		<MovieNameBox>
			<MovieName title={name} isSmallTitleSize/>
		</MovieNameBox>
		<MoviesDurationBox>{`${duration} min`}</MoviesDurationBox>
		<OverviewContainer>
			<OverviewContent>{overview}</OverviewContent>
		</OverviewContainer>
		<ButtonContainer>
			<BookButton>Book your ticket</BookButton>
		</ButtonContainer>
	 </CardContainer>
  )
}

export default FavoriteMoviesCard
