import { useNavigate } from "react-router-dom"
import { BackButton } from "../backButton/BackButton";

const ActorBio = () => {
	const navigate = useNavigate();
  return (
	 <div>
	 	<BackButton isShowingBackText/>
		<h2> | - ActorBio - | </h2>
		<h3> Site in construction </h3>
		<h5> This content is currently unavailable </h5>
		<button onClick={()=>(navigate(`/movies`))}> 
			Go back to movies 
		</button>
	 </div>
  )
}

export default ActorBio
