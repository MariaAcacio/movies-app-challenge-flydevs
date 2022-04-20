//movie component
import { useState } from 'react'
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
} from './Card.elements'


const IMG_HALF_PATH = "https://image.tmdb.org/t/p/w154";
const IMG_UNAVAILABLE = "https://www.movienewz.com/img/films/poster-holder.jpg"

const Card = ({ name, genre='action', reviews, duration=90, score, poster }) => {
	const [ isLiked, setIsLiked ] = useState(false);
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

export default Card

