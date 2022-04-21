import { Link } from "react-router-dom";
import React from 'react'
import Card from '../Card/Card'
import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import SearchingBar from '../searchingBar/SearchingBar'
import Spinner from '../spinner/Spinner'
import ErrorMessage from "../errorMessage/ErrorMessage";

const MoviesContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`


const Movies = ({ isLiked, setIsLiked }) => {
	const [movieData, setMovieData] = useState([]);
	const [movieGenres, setMovieGenres] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	
	useEffect(() => {
		const DataMovie = async () => {
		
				const urlMovies = 'https://api.themoviedb.org/3/discover/movie?api_key=9d0919906cb0d976875bf66ca4b10ec2'
				const urlGenres = 'https://api.themoviedb.org/3/genre/movie/list?api_key=9d0919906cb0d976875bf66ca4b10ec2'
				
				setIsLoading(true)
				const [ response, response2 ] = await Promise.all([ fetch(urlMovies) , fetch(urlGenres)])
				const movieObjectObtained = await response.json()
				const genreObjectObtained = await response2.json()

				setMovieData(movieObjectObtained.results);
				setMovieGenres(genreObjectObtained.genres);
				setIsLoading(false)
		}
		DataMovie()
	}, []);

	

  return (
	  <MoviesContainer className='movies'>
		<SearchingBar/>
		{isLoading && <Spinner/>}
		{
			 movieData ? movieData.map((movie) => 
				<Link key={movie.id} to={`/movies/${movie.id}`}>
					<Card 
						key={movie.id}
						name={movie.title}
						genresIds={movie.genre_ids}
						genresList={movieGenres}
						reviews={movie.popularity}
						duration={movie.duration}
						score={movie.vote_average}
						poster = {movie.poster_path}
						id={movie.id}
						isLiked={isLiked}
						setIsLiked={setIsLiked}
					/>
				</Link>
			) 
			: <ErrorMessage/>
		} 
	  </MoviesContainer>
  )
}

export default Movies
