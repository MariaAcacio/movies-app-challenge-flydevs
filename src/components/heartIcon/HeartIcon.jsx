import { useContext } from 'react'
import { GlobalContext } from '../../App'
import styled from '@emotion/styled'
import { FaHeart } from 'react-icons/fa'

const HeartBox = styled.div`
	position: absolute;
	top:12px;
	right: 5px;	
`

const HeartIcon = ({ id }) => {
	const { likesList, setLikesList } = useContext(GlobalContext);
	const isLiked = likesList.indexOf(id) >= 0;

	const handleClick = () => {
		if(isLiked){
			let auxList = likesList.filter(likesID => likesID !== id);
			setLikesList([...auxList]);
		}
		else{
			setLikesList([...likesList, id]);
		}
	}

	return (
	 <HeartBox>
		<FaHeart 
			color={isLiked ? '#FF4D79' : '#FFF'}
			onClick={handleClick}
		/>
	 </HeartBox>
  )
}

export default HeartIcon
