import { useEffect, useState, useContext } from 'react'
import { GlobalContext } from '../../App';
import {  useParams } from 'react-router-dom';
import { getMovieGenres } from '../../tools/getMovieGenres';
import { Link } from "react-router-dom";
import { AiFillPlayCircle } from 'react-icons/ai';
import { BsChevronLeft } from 'react-icons/bs';
import HeartIcon from '../heartIcon/HeartIcon';
import { IMG_HALF_PATH_W500, IMG_UNAVAILABLE } from '../../tools/imgPaths';
import { StarRating } from '../Card/StarRating';
import Spinner from '../spinner/Spinner';
import Cast from '../cast/Cast';
import { fetchDataFromApi } from '../../tools/ApiCalls';
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
	BackButton,
	IconChevronBox,
	Score
} from './MovieDetails.elements'


const MovieDetails = () => {
	const {id} = useParams();
	const [details, setDetails] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [Cast, setCast] = useState([]);
	const { moviesData, movieGenres} = useContext(GlobalContext);
	let detailGenres = "";

	useEffect(() => {
		const getGlobalDetailsData = async ()=> {
			const urlDetails =`https://api.themoviedb.org/3/movie/${id}?api_key=9d0919906cb0d976875bf66ca4b10ec2`;
			const urlCast = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=9d0919906cb0d976875bf66ca4b10ec2`;
			
			setIsLoading(true);
			const { result1: fetchedDetails, result2: fetchedCast } = await fetchDataFromApi(urlDetails, urlCast);
			
			setDetails(fetchedDetails);
			setCast(fetchedCast);
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
						<IconChevronBox>
							<BsChevronLeft 
								color='#FFFFFF'
								size='15px'
							/>
						</IconChevronBox>
						</IconPlayBox>
						<HeartBox>
							<HeartIcon id={parseInt(id)} />
						</HeartBox>
						<Link to={`/movies`}>
							<BackButton>Back</BackButton>
						</Link>
						<Score>{`+${details.vote_average}`}</Score>
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
				</>)
				: <p> Errito </p>
			}
		</>
   )
}

export default MovieDetails;
