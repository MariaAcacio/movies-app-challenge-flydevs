
import styled from '@emotion/styled'

export const Image = styled.img`
	width: 160px;
   height: 240px;
	flex-wrap: wrap;
	border-radius:2px ;
`

export const Poster = styled.div`
	background: radial-gradient(
		73.32% 73.32% at 23.55% 26.12%, 
		rgba(64, 64, 86, 0.546214) 0%, 
		rgba(34, 34, 50, 0.55) 100%
	);
	height: 296px;
	padding: 0.5px;
	box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.5);
	border-radius: 8px;
	margin-bottom: 11px;
	border:1px solid  rgba(95, 95, 117, 0.346);
	overflow: hidden;
	position: relative;
`
export const HeartBox = styled.div`
	position: absolute;
	top:12px;
	right: 5px;
` 

export const EmptyGradientCard = styled.div`
	width: 100%;
   height: 100%;
   position: absolute;
   background: linear-gradient(180deg, rgba(25, 25, 38, 0.0001) 22.31%, #191926 87.5%);
`
export const GenreContainer = styled.div`
	width: 150px;
	height: 10px;
	position: relative;
	top: -45px;
	left: calc(50% - 146px/2 - 4px);
`

export const ReviewsContainer = styled.div`
	position: absolute;
	height: 20px;
	width: 110px;
	left: calc(50% - 146px/2 - 4px);
	top: 222px;
	font-size: 7px;
	display: flex;
	align-items: center;
	color: #6D6D80;
`
export const MoviesNameContainer = styled.div`
	width: 10rem;
	height: 1rem;
	position: relative;
	top: -2rem;
	left: calc(50% - 154px/2);
`
export const MoviesDuration = styled.div`
	position: absolute;
	left: calc(50% - 154px/2);
	top: 17rem;
	font-family: 'GilroyBold';
	font-style: normal;
	font-size: 8px;
	line-height: 12px;
	display: flex;
	align-items: center;
	text-transform: uppercase;
	color: #565665;
`

export const SpanStars = styled.span`
	margin-right: 5px;
`
