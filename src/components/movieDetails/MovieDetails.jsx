import { useEffect, useState, useContext } from 'react'
import { GlobalContext } from '../../App';
import {  useParams } from 'react-router-dom';
import { getMovieGenres } from '../../tools/getMovieGenres';
import { AiFillPlayCircle } from 'react-icons/ai'
import HeartIcon from '../heartIcon/HeartIcon'
import { IMG_HALF_PATH_W500, IMG_UNAVAILABLE } from '../../tools/imgPaths'
import { StarRating } from '../Card/StarRating'
import Cast from '../cast/Cast'
import {
	MovieDetailsContainer,
	EmptyContainer,
	TrailerImg,
	IconPlayBox,
	MovieTitle,
	StoryLineContainer,
	StoryLineTitle,
	StoryLine,
	StarsBox,
	GenreMovieDetailsText,
	CastTitle
} from './MovieDetails.elements'


const MovieDetails = ({ isLiked, setIsLiked}) => {
	const {id} = useParams();
	const [details, setDetails] = useState("locote");
	const [Cast, setCast] = useState();
	const { isLoading, moviesData, movieGenres} = useContext(GlobalContext)
	let detailGenres = "";

	useEffect(() => {
		const globalDetailsData = async ()=> {
			const urlDetails =`https://api.themoviedb.org/3/movie/${id}?api_key=9d0919906cb0d976875bf66ca4b10ec2`
			const urlCast = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=9d0919906cb0d976875bf66ca4b10ec2`

			const [ response, response2 ] = await Promise.all([ fetch(urlDetails), fetch(urlCast)])
			const detailsObjectObtained = await response.json()
			const castObjectObtained = await response2.json()
			setDetails(detailsObjectObtained)
			setCast(castObjectObtained)
		}
		globalDetailsData();
	}, []);

	const getIdsMovieGenres = details.genres?.map(genre => genre.id)

	if (!!getIdsMovieGenres) {
		detailGenres = getMovieGenres(getIdsMovieGenres, movieGenres);
	}
	
	
   return (
	  <>
		<MovieDetailsContainer>
			<EmptyContainer></EmptyContainer>
			<TrailerImg 
				src={details.backdrop_path ? `${IMG_HALF_PATH_W500}/${details.backdrop_path}`: IMG_UNAVAILABLE}
				alt={details.title}
			/>
			<IconPlayBox>
				<AiFillPlayCircle
					color='#FFFFFF'
					size='80px'
				/>
			</IconPlayBox>
			<HeartIcon isLiked={isLiked} setIsLiked={setIsLiked}/>
		</MovieDetailsContainer>
		<MovieTitle className="movie-title">{details.title}</MovieTitle>
		<StarsBox>
			<StarRating 
				score={details.vote_average}
				size='14px'
			/>
		</StarsBox>
		<GenreMovieDetailsText>{detailGenres} </GenreMovieDetailsText>
		<StoryLineContainer>
			<StoryLineTitle>Storyline</StoryLineTitle>
			<StoryLine>{details.overview}</StoryLine>
		</StoryLineContainer>
		<CastTitle>Cast</CastTitle>
		{/* <Cast/> */}
	 </>
   )
}

export default MovieDetails
