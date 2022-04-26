import HeartIcon  from '../heartIcon/HeartIcon';
import { useNavigate } from "react-router-dom";
import { StarRating } from './StarRating';
import { IMG_HALF_PATH_W154, IMG_UNAVAILABLE } from '../../tools/imgPaths';
import { getMovieGenres } from '../../tools/getMovieGenres';
import { 
	Image, 
	Poster,   
	EmptyGradientCard, 
	ReviewsContainer, 
	MoviesDuration,
	SpanStars,
	GenreContainer,
	MoviesNameContainer
} from './Card.elements';
import { Rating } from '../rating/Rating';
import { Reviews } from '../reviews/Reviews';
import GenreMovieDetails from '../genreMovieDetails/GenreMovieDetails';
import MovieName from '../movieName/MovieName';

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
			<GenreContainer>
				<GenreMovieDetails movieGenres={movieGenres} isSmallFontSize={true}/>
			</GenreContainer>
			<ReviewsContainer>
				<SpanStars>
					<StarRating 
						score={score}
						size='7px'
					/>
				</SpanStars>
				<Reviews popularity={reviews} isReviewTextSize={true}/>
			</ReviewsContainer>
			<MoviesNameContainer>
				<MovieName title={name} isSmallTitleSize ={true}/>
			</MoviesNameContainer>
			<MoviesDuration>{`${duration} min`}</MoviesDuration>
		</Poster>
	 </div>
  )
}

export default Card;
