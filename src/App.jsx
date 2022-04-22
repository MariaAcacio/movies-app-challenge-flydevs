import React, { useState, createContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route }from 'react-router-dom';
import ActorBio from './components/actorBio/ActorBio';
import Favorites from './components/favorites/Favorites';
import MovieDetails from './components/movieDetails/MovieDetails';
import Movies from './components/movies/Movies';
import { fetchDataFromApi } from './tools/ApiCalls';
import './App.css';

export const GlobalContext = createContext();

function App() {
	const [ isLoading, setIsLoading ] = useState(false);
	const [ moviesData, setMoviesData ] = useState([]);
	const [ movieGenres, setMovieGenres ] = useState([]);
	const [ likesList, setLikesList ] = useState([]);

	useEffect(() => {
		const getMoviesData = async () =>{
			const urlMovies = 'https://api.themoviedb.org/3/discover/movie?api_key=9d0919906cb0d976875bf66ca4b10ec2';
			const urlGenres = 'https://api.themoviedb.org/3/genre/movie/list?api_key=9d0919906cb0d976875bf66ca4b10ec2';
			
			setIsLoading(true);
			const { result1: fetchedMovies, result2: fetchedGenres } = await fetchDataFromApi(urlMovies, urlGenres);

			setMoviesData(fetchedMovies.results);
			setMovieGenres(fetchedGenres.genres);
			setIsLoading(false);
		}
		if (moviesData.length === 0 ) {
			getMoviesData();
		}
	}, []);

  return (
    <BrowserRouter>
      <div className="App">
				<GlobalContext.Provider value={{
						isLoading, setIsLoading, 
						moviesData, 
						movieGenres, 
						likesList, setLikesList
				}}>
					<Routes>
						<Route path='/' element={<Movies/>} />
						<Route path='/movies' element={<Movies />} />
						<Route path='/movies/:id' element={<MovieDetails />} />
						<Route path='/actorbio/:id' element={<ActorBio />} />
						<Route path='/favorites' element={<Favorites />} />
					</Routes>
				</GlobalContext.Provider>
      </div>
    </BrowserRouter>
  )
}

export default App;
