export const getMovieGenres = (genresIds, genresList) => {

		let preFilteredGenres = genresIds.map(movieGenreId => {
			return genresList.find(genre => (genre.id === movieGenreId));
		});
		
		return preFilteredGenres.map(genre => genre?.name).join(", ");
	}