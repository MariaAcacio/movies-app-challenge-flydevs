import React from 'react'
import { FaHeart } from 'react-icons/fa'
import styled from '@emotion/styled'

const HeartBox = styled.div`
	position: absolute;
	top:12px;
	right: 5px;
	
`

const HeartIcon = ({ isLiked, setIsLiked }) => {
  return (
	 <HeartBox>
		<FaHeart 
			color={isLiked ? '#FF4D79' : '#FFF'}
			onClick={()=>(setIsLiked(!isLiked))}
		/>
	 </HeartBox>
  )
}

export default HeartIcon
