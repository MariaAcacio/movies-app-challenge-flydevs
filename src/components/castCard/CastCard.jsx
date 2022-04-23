import React from 'react'
import { IMG_HALF_PATH_W92, IMG_UNAVAILABLE } from '../../tools/imgPaths'
import { useNavigate } from "react-router-dom";
import { 
	CastBox,
	ActorCard,
	ImgContainer,
	Image,
	CastTitleContainer,
	ActorName,

} from './CastCard.element'

 const CastCard = ({ path, name, id }) => {
	 let navigate = useNavigate();
  return (
		<CastBox onClick={()=>(navigate(`/actorbio/${id}`))}>
			<ActorCard>
				<ImgContainer >
					<Image src={path ? `${IMG_HALF_PATH_W92}/${path}` : IMG_UNAVAILABLE } alt='Actor picture'/>
				</ImgContainer>
				<CastTitleContainer>
					<ActorName>{name}</ActorName>
				</CastTitleContainer>
			</ActorCard>
		</CastBox>
  )
}
export default CastCard


