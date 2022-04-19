import React from 'react'
import SingleContent from '../SingleContent/SingleContent'
import './Movies.css';

const Movies = () => {

	const arrayMovies = [0,1,2,3];

  return (
	  <div className='movies'>
		{
			arrayMovies.map((movie, id) => <SingleContent key={id}/>)
		}
	  </div>
  )
}

export default Movies
