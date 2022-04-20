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

	// const MoviesData = [0,1,2,3];
	const MoviesData = [
		{
			name:'Guardian Invisible',
			genre:'Action, Adventure, Drama',
			reviews:98,
			duration:137,
			score:13,
			id:23135
		},
		{
			name:'Avengers',
			genre:'Action',
			reviews:125,
			duration:102,
			score:15,
			id:515
		},
		{
			name:'The Ugly True',
			genre:'Comedy,Romance',
			reviews:100,
			duration:98,
			score:8,
			id:586
		},
		{
			name:'Tenet',
			genre:'Action, Sci-Fi, Thriller',
			reviews:98,
			duration:97,
			score:16,
			id:8746
		},
	];

  return (
	  <MoviesContainer className='movies'>
		<SearchingBar/>
		{
			MoviesData.map((movie, id) => 
			<SingleContent 
				key={movie.id}
				name={movie.name}
				genre={movie.genre}
				reviews={movie.reviews}
				duration={movie.duration}
				score={movie.score}
				id={movie.id}
			/>)
		}
	  </MoviesContainer>
  )
}

export default Movies
