//movie component
import imgMovie from './../../img/pelicula-guardian-invisible-600.jpg'
import './SingleContent.css'

const SingleContent = () => {
  return (
	 <div className='singlecontent'>
		<div className='container'>
				<div className="poster">
					<img src={imgMovie} alt="cualquiera" />

					<div className="corazon">heart</div>
					<div className="rating">rating</div>
					<div className="reviews">reviews</div>
				</div>
	 	</div>
	 </div>
  )
}

export default SingleContent

