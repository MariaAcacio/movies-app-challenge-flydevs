import React from 'react'
import testImg from './../../img/pelicula-guardian-invisible-600.jpg'
import { AiFillPlayCircle } from 'react-icons/ai'
import HeartIcon from '../heartIcon/HeartIcon'
import { IMG_HALF_PATH_W500 } from '../../tools/imgPaths'
import styled from '@emotion/styled'

const MovieDetailsContainer = styled.div`
	margin: 0 -16px;
	position: relative;
	height: 298px;
`
const EmptyContainer = styled.div`
	width: 100%;
   height: inherit;
   position: absolute;
   background: linear-gradient(180deg, rgba(25, 25, 38, 0.0001) 50%, #191926 92.15%);
`
const TrailerImg = styled.img`
	width: 100%;
	height: inherit;
   object-fit: cover;
	/* opacity: 0.18; */
	
`
const IconPlayBox = styled.div`
	position: absolute;
	width: 72px;
	height: 72px;
	left: 152px;
	top: 113px;
	mix-blend-mode: normal;
	opacity: 0.75;
`
const MovieTitle = styled.h2`
	position: absolute;
	width: 343px;
	height: 80px;
	left: calc(50% - 343px/2);
	top: 13rem;
	font-family: 'GilroyBold';
	font-size: 40px;
	line-height: 40px;
	display: flex;
	align-items: center;
	letter-spacing: -0.5px;
`
const StoryLineContainer = styled.div`
	font-size: 14px;
	line-height: 20px;
	margin-bottom: 1.5rem;
`
const StoryLineTitle = styled.p`
	font-family: 'GilroyBold';
   margin-bottom: 0.25rem;
	position: absolute;
	width: 343px;
	height: 20px;
	left: calc(50% - 343px/2);
	top: 380px;
	font-weight: 800;
	font-size: 14px;
	line-height: 20px;
	display: flex;
	align-items: center;
`
const StoryLine = styled.div`
	margin-bottom: 1.5rem;
	position: absolute;
	left: calc(50% - 343px/2);
	right: 0%;
	top: 52%;
	bottom: 0%;
	display: flex;
	align-items: center;
	color: #FFFFFF;
	mix-blend-mode: normal;
	opacity: 0.75;
`
const MovieDetails = ({ isLiked, setIsLiked}) => {
  return (
	  <>
		<MovieDetailsContainer>
			<EmptyContainer></EmptyContainer>
			<TrailerImg src={testImg} alt='movieDetails'/>
			<IconPlayBox>
				<AiFillPlayCircle
					color='#FFFFFF'
					size='80px'
				/>
			</IconPlayBox>
			<HeartIcon isLiked={isLiked} setIsLiked={setIsLiked}/>
		</MovieDetailsContainer>
		<MovieTitle className="movie-title">Title of the movie</MovieTitle>
		{/* <h3>Genres </h3> */}
		<StoryLineContainer>
			<StoryLineTitle>Storyline</StoryLineTitle>
			<StoryLine>Details overview</StoryLine>
		</StoryLineContainer>
	 </>
  )
}

export default MovieDetails
