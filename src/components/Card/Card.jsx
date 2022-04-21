//movie component
import { useState } from 'react'
import HeartIcon  from '../heartIcon/HeartIcon'
import { StarRating } from './StarRating'
import { IMG_HALF_PATH_W154, IMG_UNAVAILABLE } from '../../tools/imgPaths'
import { 
	Image, 
	Poster,  
	Rating, 
	EmptyGradientCard, 
	GenreMovieText, 
	Reviews, 
	MoviesName, 
	MoviesDuration
} from './Card.elements'


const Card = ({ 
	name, 
	genresIds, 
	reviews, 
	duration=90, 
	score, 
	poster, 
	genresList, 
	isLiked, 
	setIsLiked }) => {
	

	const getMovieGenres = (genresIds) => {

		let preFilteredGenres = genresIds.map(movieGenreId => {
			return genresList.filter(genre => (genre.id === movieGenreId));
		}).flat();
		
		return preFilteredGenres.map(genre => genre.name).join(", ");
	}
	const movieGendes= getMovieGenres(genresIds)

  return (
	 <div className='card'>
		<div>
				<Poster>
					<EmptyGradientCard></EmptyGradientCard>
					<HeartIcon isLiked = {isLiked} setIsLiked={setIsLiked}/>
					<Image src={poster ? `${IMG_HALF_PATH_W154}/${poster}`: IMG_UNAVAILABLE } alt="testImage" />
					<Rating>{`+${score}`}</Rating>
					<GenreMovieText>{movieGendes}</GenreMovieText>
					<Reviews>
						<StarRating score={score}/>
						{`${reviews} reviews`}
					</Reviews>
					<MoviesName>{name}</MoviesName>
					<MoviesDuration>{`${duration} min`}</MoviesDuration>
				</Poster>
	 	</div>
	 </div>
  )
}

export default Card

