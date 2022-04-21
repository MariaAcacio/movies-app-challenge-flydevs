
export const fetchMoviesData = async () => {

	const urlMovies = 'https://api.themoviedb.org/3/discover/movie?api_key=9d0919906cb0d976875bf66ca4b10ec2'
	const urlGenres = 'https://api.themoviedb.org/3/genre/movie/list?api_key=9d0919906cb0d976875bf66ca4b10ec2'
	
	const [ response, response2 ] = await Promise.all([ fetch(urlMovies) , fetch(urlGenres)])
	const movieObjectObtained = await response.json()
	const genreObjectObtained = await response2.json()
	return({movies:movieObjectObtained.results, genres:genreObjectObtained.genres})
}
