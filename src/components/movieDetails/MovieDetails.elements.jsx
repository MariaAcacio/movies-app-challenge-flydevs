import styled from '@emotion/styled'

export const MovieDetailsContainer = styled.div`
	margin: 0 -16px;
	position: relative;
	height: 298px;
	overflow: hidden;
`
export const EmptyContainer = styled.div`
	width: 100%;
   height: inherit;
   position: absolute;
	background: linear-gradient(180deg, rgba(25, 25, 38, 0.0001) -200%, #191926 92.15%);
`
export const ImgContainer = styled.div`
	width: 100%;
`

export const TrailerImg = styled.img`
	width: 100%;
	height: inherit;
   object-fit: cover;
	
`
export const IconPlayBox = styled.div`
	position: absolute;
	left: 9.2em;
	top: 113px;
	mix-blend-mode: normal;
	opacity: 0.75;
`
export const HeartBox = styled.div`
	position: relative;
	top:-18rem;
`
export const Score = styled.div`
	font-family:'GilroyBold';
	font-size: 12px;
	padding: 0.4em 0.2em;
	position: absolute;
	left: calc(50% - 343px/2);
	top: 16em;
	background: #191926;
	opacity: 0.9;
	border: 1px solid #191926;
	box-sizing: border-box;
	border-radius: 5px;
	color: white;
`
export const MovieTitle = styled.h2`
	position: relative;
	left: calc(50% - 343px/2);
	top: -6.6rem;
	font-family: 'GilroyBold';
	font-size: 40px;
	line-height: 40px;
	display: flex;
	text-align: left;
	align-items: center;
`
export const StoryLineContainer = styled.div`
	font-size: 14px;
	line-height: 20px;
	margin-bottom: 0.25rem;
`
export const StoryLineTitle = styled.p`
	font-family: 'GilroyBold';
	position: relative;
	left: calc(50% - 343px/2);
	top: -8rem;
	text-align: left;
	align-items: center;
`
export const StoryLine = styled.div`
	position: relative;
	left: calc(50% - 343px/2);
	top: -8.5rem;
	text-align: left;
	mix-blend-mode: normal;
	opacity: 0.75;
	font-style: normal;
	font-weight: 300;
	font-size: 14px;
	line-height: 20px;
	margin-bottom: 1.5rem;
`
export const StarsBox = styled.span`
	position: relative;
	left: calc(50% - 343px/2);
	top: -7rem;
	bottom: 50%;
	display: flex;
`
export const ReviewsText = styled.div`
	position: relative;
	/* height: 170px; */
	left: 5rem;
	top: -6.2rem;
	font-family: 'GilroyBold';
	font-style: normal;
	font-weight: 800;
	font-size: 18px;
	line-height: 12px;
	display: flex;
	align-items: center;
	text-transform: uppercase;
	color: #6D6D80;
`
export const GenreMovieDetailsText = styled.p`
	position: relative;
	top: -10.2rem;
	left: calc(50% - 343px/2);
	font-style: normal;
	font-weight: 300;
	font-size: 14px;
	line-height: 20px;
	display: flex;
	align-items: center;

	color: #FF3466;
`
export const CastTitle = styled.div`
	position: relative;
	left: calc(50% - 343px/2);
	top: -8rem;
	text-align: left;
	font-family: 'GilroyBold';
	font-size: 14px;
	line-height: 20px;
	align-items: center;
	text-shadow: 0px 6px 12px rgba(0, 0, 0, 0.5);
`
export const CastingContainer = styled.div`
	position: relative;
	top: -6rem;
	 display: flex;
	 gap:4px;
	 left: calc(50% - 343px/2);
    flex-wrap: wrap;
    justify-content: flex-start;
    overflow-y: hidden;
	 width: 100%;
`
export const SeeAll = styled.button`
	border: none;
	position: relative;
	top: -9.3rem;
	left: 11.5em;
	font-family: 'GilroyLight';
	background-color: transparent;
	color: #FFFFFF;
	opacity: 0.5;
`
