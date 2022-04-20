//movie component
import { useState } from 'react'
import imgMovie from './../../img/pelicula-guardian-invisible-600.jpg'
import { FaHeart } from 'react-icons/fa'
import { StarRating } from './StarRating'
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
} from './SingleContent.elements'





const SingleContent = ({ name, genre, reviews, duration, score }) => {
	const [ isLiked, setIsLiked ] = useState(false);
  return (
	 <div className='singlecontent'>
		<div>
				<Poster>
					<EmptyGradientCard></EmptyGradientCard>
					<Image src={imgMovie} alt="testImage" />
					<HeartBox>
						<FaHeart 
							color={isLiked ? '#FF4D79' : '#FFF'}
							onClick={()=>(setIsLiked(!isLiked))}
						/>
					</HeartBox>
					<Rating>{`+${score}`}</Rating>
					<GenreMovieText>{genre}</GenreMovieText>
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

export default SingleContent

