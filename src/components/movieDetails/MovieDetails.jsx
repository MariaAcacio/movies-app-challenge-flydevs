import { useEffect, useState, useContext } from 'react'
import { GlobalContext } from '../../App';
import {  useParams } from 'react-router-dom';
import { getMovieGenres } from '../../tools/getMovieGenres';
// import { Link } from "react-router-dom";
import { AiFillPlayCircle } from 'react-icons/ai';
// import { BsChevronLeft } from 'react-icons/bs';
import HeartIcon from '../heartIcon/HeartIcon';
import { IMG_HALF_PATH_W500, IMG_UNAVAILABLE } from '../../tools/imgPaths';
import { StarRating } from '../Card/StarRating';
import Spinner from '../spinner/Spinner';
import CastCard from '../castCard/CastCard';
import { fetchDataFromApi } from '../../tools/ApiCalls';
import { BackButton } from './../backButton/BackButton';
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
	CastTitle,
	HeartBox,
	Score,
	ReviewsText,
	CastingContainer,
	SeeAll
} from './MovieDetails.elements'
import ErrorMessage from '../errorMessage/ErrorMessage';


const MovieDetails = () => {
	const {id} = useParams();
	const [details, setDetails] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [cast, setCast] = useState([]);
	const [isShowingLess, setIsShowingLess] = useState(true);
	const {movieGenres} = useContext(GlobalContext);
	let detailGenres = "";

	useEffect(() => {
		const getGlobalDetailsData = async ()=> {
			const urlDetails =`https://api.themoviedb.org/3/movie/${id}?api_key=9d0919906cb0d976875bf66ca4b10ec2`;
			const urlCast = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=9d0919906cb0d976875bf66ca4b10ec2`;
			
			setIsLoading(true);
			const { result1: fetchedDetails, result2: fetchedCast } = await fetchDataFromApi(urlDetails, urlCast);
			
			setDetails(fetchedDetails);
			setCast(fetchedCast.cast);
			setIsLoading(false);
		}
		getGlobalDetailsData();
	}, []);

	const getIdsMovieGenres = details.genres?.map(genre => genre.id);

	if (!!getIdsMovieGenres) {
		detailGenres = getMovieGenres(getIdsMovieGenres, movieGenres);
	}
	
   return (
		<>
			{ isLoading && <Spinner/>}
			{ details ? (
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
						<HeartBox>
							<HeartIcon id={parseInt(id)} />
						</HeartBox>
						<BackButton isShoingBackText/>
						<Score>{`+${details.vote_average}`}</Score>
					</MovieDetailsContainer>
					<MovieTitle className="movie-title">{details.title}</MovieTitle>
					<ReviewsText>{`${parseInt(details.popularity)} reviews`}</ReviewsText>
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
					<SeeAll onClick={()=> setIsShowingLess(!isShowingLess)}>
						{ isShowingLess?`See All` : 'Show Less'}
					</SeeAll>
					<CastingContainer>
							{cast?.length > 0 ? cast.map((castInfo) => 
								<CastCard
									key = {castInfo.id}
									path ={castInfo.profile_path}
									name={castInfo.original_name}
									id={castInfo.id}
								/>).filter((elm,index, elmArray)=> {
										const numberElementsShown = isShowingLess? 8 : elmArray.length;							
										return index < numberElementsShown;
									}) 
							: <ErrorMessage/>}
					</CastingContainer>
				</>)
				: <ErrorMessage/>
			}
		</>
   )
}

export default MovieDetails;