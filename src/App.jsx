import React, { useState, createContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route }from 'react-router-dom'
import ActorBio from './components/actorBio/ActorBio'
import Favorites from './components/favorites/Favorites'
import MovieDetails from './components/movieDetails/MovieDetails'
import Movies from './components/movies/Movies'
import './App.css'
import { fetchMoviesData } from './tools/ApiCalls';

export const GlobalContext = createContext();

function App() {
	const [ isLiked, setIsLiked ] = useState(false);
	const [moviesData, setMoviesData] = useState([]);
	const [movieGenres, setMovieGenres] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const getMoviesData = async () =>{
			setIsLoading(true)
			const fetchedData = await fetchMoviesData()

			console.log("App 01", fetchedData);
			setMoviesData(fetchedData.movies)
			setMovieGenres(fetchedData.genres)
			setIsLoading(false)
		}
		if (moviesData.length === 0 ) {
			getMoviesData()
		}
	}, []);

  return (
    <BrowserRouter>
      <div className="App">
				<GlobalContext.Provider value={{isLoading, moviesData, movieGenres}}>
					<Routes>
						<Route path='/' element={<Movies/>} />
						<Route path='/movies' element={
							<Movies 
								isLiked={isLiked} 
								setIsLiked={setIsLiked}
							/>} />
						<Route path='/movies/:id' element={
							<MovieDetails 
								isLiked={isLiked} 
								setIsLiked={setIsLiked} 
							/>} />
						<Route path='/actorbio/:id' element={<ActorBio />} />
						<Route path='/favorites' element={<Favorites />} />
					</Routes>
				</GlobalContext.Provider>
      </div>
    </BrowserRouter>
  )
}

export default App
