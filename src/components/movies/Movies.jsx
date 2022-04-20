import React from 'react'
import Card from '../Card/Card'
import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import SearchingBar from '../searchingBar/SearchingBar'

const MoviesContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`


const Movies = () => {
	const [movieData, setMovieData] = useState([]);
	const [movieGenre, setMovieGenre] = useState([]);
	useEffect(() => {
		const DataMovie = async () => {
			const url = 'https://api.themoviedb.org/3/discover/movie?api_key=9d0919906cb0d976875bf66ca4b10ec2'
			const response = await fetch(url)
			const objectObtained = await response.json()
			setMovieData(objectObtained.results)
		}
		DataMovie()
	}, []);

	useEffect(() => {
		const DataGenre = async () => {
			const url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=9d0919906cb0d976875bf66ca4b10ec2'
			const response = await fetch(url)
			const objectObtained = await response.json()
			setMovieGenre(objectObtained.genres);
		}
		DataGenre()
	}, []);
	console.log(movieGenre);
	console.log(movieData);
	

  return (
	  <MoviesContainer className='movies'>
		<SearchingBar/>
		{
			movieData.map((movie, id) => 
			<Card 
				key={movie.id}
				name={movie.title}
				genre={movie.genre}
				reviews={movie.popularity}
				duration={movie.duration}
				score={movie.vote_average}
				poster = {movie.poster_path}
				id={movie.id}
				
			/>)
		}
	  </MoviesContainer>
  )
}

export default Movies
