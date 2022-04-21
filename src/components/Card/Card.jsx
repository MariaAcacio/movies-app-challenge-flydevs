import HeartIcon  from '../heartIcon/HeartIcon'
import { StarRating } from './StarRating'
import { IMG_HALF_PATH_W154, IMG_UNAVAILABLE } from '../../tools/imgPaths'
import { getMovieGenres } from '../../tools/getMovieGenres'
import { 
	Image, 
	Poster,  
	Rating, 
	EmptyGradientCard, 
	GenreMovieText, 
	Reviews, 
	MoviesName, 
	MoviesDuration,
	SpanStars
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
	
	const movieGendes= getMovieGenres(genresIds, genresList)

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
						<SpanStars>
							<StarRating 
								score={score}
								size='7px'
							/>
						</SpanStars>
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

