import React from 'react'
import SingleContent from '../SingleContent/SingleContent'
import './Movies.css';
import styled from '@emotion/styled'

const MoviesContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`

const Movies = () => {

	const arrayMovies = [0,1,2,3];

  return (
	  <MoviesContainer className='movies'>
		{
			arrayMovies.map((movie, id) => <SingleContent key={id}/>)
		}
	  </MoviesContainer>
  )
}

export default Movies
