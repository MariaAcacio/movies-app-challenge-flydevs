//movie component
import imgMovie from './../../img/pelicula-guardian-invisible-600.jpg'
import styled from '@emotion/styled'

const ContainerMovie = styled.div`
	/* margin-top: 136px; */

`
const Image = styled.img`
	width: 160px;
   height: auto;
	flex-wrap: wrap;
	border-radius:2px ;
`
const Poster = styled.div`
	background: radial-gradient(73.32% 73.32% at 23.55% 26.12%, rgba(64, 64, 86, 0.546214) 0%, rgba(34, 34, 50, 0.55) 100%);
	padding: 0.5px;
	box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.5);
	border-radius: 8px;
	margin-bottom: 11px;
	border:1px solid #636375;
	overflow: hidden;
	
`
const SingleContent = () => {
  return (
	 <div className='singlecontent'>
		<ContainerMovie>
				<Poster>
					<Image src={imgMovie} alt="cualquiera" />

					<div>heart</div>
					<div className="rating">rating</div>
					<div className="reviews">reviews</div>
				</Poster>
	 	</ContainerMovie>
	 </div>
  )
}

export default SingleContent

