import styled from '@emotion/styled'

export const MovieDetailsContainer = styled.div`
	margin: 0 -16px;
	position: relative;
	height: 298px;
`
export const EmptyContainer = styled.div`
	width: 100%;
   height: inherit;
   position: absolute;
   background: linear-gradient(180deg, rgba(25, 25, 38, 0.0001) 50%, #191926 92.15%);
`
export const TrailerImg = styled.img`
	width: 100%;
	height: inherit;
   object-fit: cover;
	opacity: 0.18;
	
`
export const IconPlayBox = styled.div`
	position: absolute;
	width: 72px;
	height: 72px;
	left: 152px;
	top: 113px;
	mix-blend-mode: normal;
	opacity: 0.75;
`
export const MovieTitle = styled.h2`
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
export const StoryLineContainer = styled.div`
	font-size: 14px;
	line-height: 20px;
	margin-bottom: 0.25rem;
`
export const StoryLineTitle = styled.p`
	font-family: 'GilroyBold';
	position: absolute;
	width: 343px;
	left: calc(50% - 343px/2);
	top: 340px;
	display: flex;
	align-items: center;
`
export const StoryLine = styled.div`
	position: absolute;
	display: flex;
	left: calc(50% - 343px/2);
	top: 23.5rem;
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
	position: absolute;
	left: calc(50% - 343px/2);
	right: 0%;
	top: 55.5%;
	bottom: 0%;
	display: flex;
`
export const GenreMovieDetailsText = styled.p`
	position: absolute;
	width: 343px;
	height: 20px;
	left: calc(50% - 343px/2);
	top: calc(51% - 20px/2);

	font-style: normal;
	font-weight: 300;
	font-size: 14px;
	line-height: 20px;
	display: flex;
	align-items: center;

	color: #FF3466;
`
export const CastTitle = styled.div`
	position: absolute;
	left: calc(50% - 343px/2);
	width: 243px;
	height: 24px;
	top: 455px;
	display: flex;
	font-family: 'GilroyBold';
	font-style: normal;
	font-weight: 800;
	font-size: 14px;
	line-height: 20px;
	align-items: center;
	text-shadow: 0px 6px 12px rgba(0, 0, 0, 0.5);
`