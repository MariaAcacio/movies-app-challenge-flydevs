//movie component
import imagen from './../../img/imagen-criptos.png'
import './SingleContent.css'

const SingleContent = () => {
  return (
	 <div className='singlecontent'>
		<div className='container'>
				<div className="poster">
					<img src={imagen} alt="cualquiera" />

					<div className="corazon">heart</div>
					<div className="rating">rating</div>
					<div className="reviews">reviews</div>
				</div>
	 	</div>
	 </div>
  )
}

export default SingleContent

