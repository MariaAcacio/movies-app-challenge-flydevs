
import styled from '@emotion/styled'

export const Image = styled.img`
	width: 160px;
   height: 240px;
	flex-wrap: wrap;
	border-radius:2px ;
`

export const Poster = styled.div`
	background: radial-gradient(73.32% 73.32% at 23.55% 26.12%, rgba(64, 64, 86, 0.546214) 0%, rgba(34, 34, 50, 0.55) 100%);
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

export const GenreMovieText = styled.p`
	position: absolute;
	width: 146px;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	left: calc(50% - 146px/2 - 4px);
	top: calc(50% - 12px/2 + 66px);
	font-family: 'GilroyLight';
	font-size: 8px;
	line-height: 12px;
	display: flex;
	align-items: center;
	color: #FF3466;
	/* border: 1px solid yellow; */
`

export const Reviews = styled.div`

	position: absolute;
	height: 170px;
	left: 5px;
	top: 150px;
	font-family: 'GilroyBold';
	font-style: normal;
	font-weight: 800;
	font-size: 7px;
	line-height: 12px;
	display: flex;
	align-items: center;
	text-transform: uppercase;
	color: #6D6D80;

`

export const MoviesName = styled.div`
	position: relative;
	width: 154px;
	height: 265px;
	left: calc(50% - 154px/2);
	top:-7.3rem;
	font-family: 'GilroyBold';
	font-style: normal;
	font-weight: 800;
	font-size: 14px;
	line-height: 14px;
	text-align: left;
	display: flex;
	align-items: center;
	background: linear-gradient(152.39deg, #ECECEC 25.4%, #C4C4C4 52.32%, #FFFFFF 82.83%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;

`

export const MoviesDuration = styled.div`
	position: absolute;
	left: calc(50% - 154px/2);
	top: 17rem;
	font-family: 'GilroyBold';
	font-style: normal;
	font-weight: 800;
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
