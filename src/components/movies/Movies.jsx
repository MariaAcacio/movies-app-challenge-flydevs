import { Link } from "react-router-dom";
import Card from '../Card/Card'
import { useEffect, useState, useContext } from 'react'
import { GlobalContext } from "../../App";
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
	const {isLoading, moviesData, movieGenres} = useContext(GlobalContext)

  return (
	  <MoviesContainer className='movies'>
		<SearchingBar/>
		{isLoading && <Spinner/>}
		{
			 moviesData ? moviesData.map((movie) => 
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
