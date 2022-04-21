//movie component
import { useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { StarRating } from './StarRating'
import { IMG_HALF_PATH, IMG_UNAVAILABLE } from '../../tools/imgPaths'
import { 
	Image, 
	Poster, 
	HeartBox, 
	Rating, 
	EmptyGradientCard, 
	GenreMovieText, 
	Reviews, 
	MoviesName, 
	MoviesDuration
} from './Card.elements'




const Card = ({ name, genresIds, reviews, duration=90, score, poster, genresList }) => {
	const [ isLiked, setIsLiked ] = useState(false);

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
					<Image src={poster ? `${IMG_HALF_PATH}/${poster}`: IMG_UNAVAILABLE } alt="testImage" />
					<HeartBox>
						<FaHeart 
							color={isLiked ? '#FF4D79' : '#FFF'}
							onClick={()=>(setIsLiked(!isLiked))}
						/>
					</HeartBox>
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

