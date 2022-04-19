import { useState } from 'react'
import { BrowserRouter, Routes, Route }from 'react-router-dom'
import ActorBio from './components/actorBio/ActorBio'
import Favourites from './components/favourites/Favourites'
import MovieDetails from './components/movieDetails/MovieDetails'
import Movies from './components/movies/Movies'

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <div className="App">
				<Routes>
					<Route path='/' element={<Movies />} />
					<Route path='/movies' element={<Movies />} />
					<Route path='/movies/:id' element={<MovieDetails />} />
					<Route path='/actorbio/:id' element={<ActorBio />} />
					<Route path='/favourites' element={<Favourites />} />
				</Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
