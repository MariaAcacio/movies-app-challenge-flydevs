import React, { useState, createContext } from 'react';
import { BrowserRouter, Routes, Route }from 'react-router-dom'
import ActorBio from './components/actorBio/ActorBio'
import Favorites from './components/favorites/Favorites'
import MovieDetails from './components/movieDetails/MovieDetails'
import Movies from './components/movies/Movies'
import './App.css'

export const GlobalContext = createContext();

function App() {
	const [ isLiked, setIsLiked ] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
				<GlobalContext.Provider value={'hola'}>
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
