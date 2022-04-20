import React from 'react'
import SingleContent from '../SingleContent/SingleContent'
import styled from '@emotion/styled'
import SearchingBar from '../searchingBar/SearchingBar'

const MoviesContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`

const Movies = () => {

	const MoviesData = [0,1,2,3];

  return (
	  <MoviesContainer className='movies'>
		<SearchingBar/>
		{
			MoviesData.map((movie, id) => <SingleContent key={id}/>)
		}
	  </MoviesContainer>
  )
}

export default Movies
