import HeartIcon  from '../heartIcon/HeartIcon';
import { useNavigate } from "react-router-dom";
import { StarRating } from './StarRating';
import { IMG_HALF_PATH_W154, IMG_UNAVAILABLE } from '../../tools/imgPaths';
import { getMovieGenres } from '../../tools/getMovieGenres';
import { 
	Image, 
	Poster,   
	EmptyGradientCard, 
	GenreMovieText, 
	Reviews, 
	MoviesName, 
	MoviesDuration,
	SpanStars
} from './Card.elements';
import { Rating } from '../rating/Rating';

const Card = ({ 
	name,
	id,
	genresIds, 
	reviews, 
	duration=90, 
	score, 
	poster, 
	genresList, 
}) => {	
	const movieGenres= getMovieGenres(genresIds, genresList);
	let navigate = useNavigate();

	const handleClick = (evnt) => {
		if(evnt.target.tagName === 'DIV') navigate(`/movies/${id}`);
	}

  return (
	 <div className='card' onClick={handleClick}>
		<Poster>
			<EmptyGradientCard></EmptyGradientCard>
			<HeartIcon id={id} />
			<Image src={poster ? `${IMG_HALF_PATH_W154}/${poster}`: IMG_UNAVAILABLE } alt="movieCover" />
			<Rating score={score} isShowingCard/>
			<GenreMovieText>{movieGenres}</GenreMovieText>
			<Reviews>
				<SpanStars>
					<StarRating 
						score={score}
						size='7px'
					/>
				</SpanStars>
				{`${parseInt(reviews)} reviews`}
			</Reviews>
			<MoviesName>{name}</MoviesName>
			<MoviesDuration>{`${duration} min`}</MoviesDuration>
		</Poster>
	 </div>
  )
}

export default Card;
