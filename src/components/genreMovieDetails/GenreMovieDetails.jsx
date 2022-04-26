import React from 'react'
import styled from '@emotion/styled'

const GenreMovieText = styled.p`
	/* position: relative; */
	/* top: ${({ isSmallFontSize })=> isSmallFontSize? '-0.8rem' : '-10.8rem'}; */
	/* left: ${({ isSmallFontSize })=> isSmallFontSize? '0.20rem' : 'calc(50% - 343px/2)'}; */
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	font-style: normal;
	font-weight: 300;
	font-size: ${({ isSmallFontSize })=> isSmallFontSize? '8px' : '14px'};
	line-height: 20px;
	display: flex;
	align-items: center;
	color: #FF3466;
`
const GenreMovieDetails = ({movieGenres, isSmallFontSize}) => {
  return (
	 <GenreMovieText isSmallFontSize={isSmallFontSize}>
		{movieGenres}
	 </GenreMovieText>
  )
}

export default GenreMovieDetails
