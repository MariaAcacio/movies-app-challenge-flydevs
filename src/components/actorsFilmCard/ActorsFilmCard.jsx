import React from 'react'
import styled from '@emotion/styled'
import testImg from '../../img/imageForDev.jpg'


const TitleAndImgContent = styled.div`
	display: flex;
	flex-direction: column;
	width:123.05px;
	height: 226.55px;
	background: 
		radial-gradient(73.32% 73.32% at 23.55% 26.12%, 
		rgba(64, 64, 86, 0.546214) 0%,
		rgba(34, 34, 50, 0.55) 100%);
	box-shadow: 0px 18px 28px rgba(0, 0, 0, 0.5);
	border-radius: 9.2px;
	border: 1px solid rgba(64, 64, 86, 0.546214);
	overflow: hidden;
`
const ImgActorsFilmContent = styled.div`

`
const ImgActorsFilm = styled.img`
	width: 100%;
	height: inherit;
   object-fit: cover;
	border-radius: 9.2px;
`
const FilmName = styled.p`
	font-family: 'GilroyBold';
	font-style: normal;
	font-weight: 100;
	font-size: 9.2px;
	line-height: 14px;
	text-transform: uppercase;
	margin-left: 8px;
	text-align: left;
	/* border: 1px solid yellow; */
`



export const ActorsFilmCard = ({id}) => {
  return (
	<div>
		<TitleAndImgContent>
			<ImgActorsFilmContent>
				<ImgActorsFilm src={testImg} alt="testImg" />
			</ImgActorsFilmContent>
			<FilmName>Movies Title</FilmName>
		</TitleAndImgContent>
	</div>
  )
}

