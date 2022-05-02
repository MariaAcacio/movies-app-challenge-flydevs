import { useEffect, useState } from "react";
import { IMG_HALF_PATH_W500, IMG_HALF_PATH_W92, IMG_UNAVAILABLE } from '../../tools/imgPaths'
import {  useParams } from 'react-router-dom';
import { ActorsFilmCard } from "../actorsFilmCard/ActorsFilmCard";
import {fetchDataFromApi} from "../../tools/ApiCalls"
import {BackButton} from '../backButton/BackButton'
import {
	CoverContent,
	EmptyCover,
	ImgCover,
	GeneralContent,
	ActorTitle,
	ActorDataContainer,
	ActorImgContainer,
	ActorImg,
	ActorData,
	TitleAndButtonContainer,
	Biography,
	BiographyTitle,
	ActorText,
	ActorsFilmContent,
	ButtonBox
}from './ActorBio.element'

const ActorBio = () => {
	const {id} = useParams();
	const [actor, setActor] = useState({});
	const ArrayTest =[1,2,3,4,5];

	useEffect(() => {
		const urlActor = `https://api.themoviedb.org/3/person/${id}?api_key=9d0919906cb0d976875bf66ca4b10ec2&language=en-US`
		const getGlobalDetailsData = async ()=> {
			const response = await fetch(urlActor);
			const result = await response.json();
			setActor(result);
			// console.log(result);
		}
		getGlobalDetailsData();
	}, []);
	return (
		<div className="contenedor padre">
				<ButtonBox>
					<BackButton isShowingBackText isGoingToMovies={false}/>
				</ButtonBox>
			<CoverContent>
				<EmptyCover></EmptyCover>
				<ImgCover 
					src={actor.profile_path?`${IMG_HALF_PATH_W500}/${actor.profile_path}`: IMG_UNAVAILABLE } 
					alt={actor.name} 
				/>
			</CoverContent>
			<GeneralContent>
				<ActorTitle>{actor.name}</ActorTitle>			
				<ActorDataContainer>
					<ActorImgContainer>
						<ActorImg 
							src={actor.profile_path?`${IMG_HALF_PATH_W92}/${actor.profile_path}`: IMG_UNAVAILABLE} 
							alt={actor.name} />
					</ActorImgContainer>
					<ActorData>
						{/* <span>4 April, 1965</span> */}
						<span>{actor.birthday}</span>
						<span>{actor.place_of_birth}</span>
						<span className="occupation">{actor.known_for_department}</span>
					</ActorData>
				</ActorDataContainer>
					<TitleAndButtonContainer>
						<p>Filmography</p>
						<button>See all</button>
					</TitleAndButtonContainer>
					<ActorsFilmContent>
						{ArrayTest.map((card, index) => <ActorsFilmCard key={index}/>)}
						{/* <ActorsFilmCard/> */}
					</ActorsFilmContent>
				<Biography>
					<BiographyTitle>Biography</BiographyTitle>
					<ActorText>
						<p>{actor.biography}</p>
					</ActorText>	
				</Biography>
			</GeneralContent>
		</div>
	)
}

export default ActorBio
