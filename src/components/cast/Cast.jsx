import React from 'react'
import testImg from '../../img/pelicula-guardian-invisible-600.jpg'
import styled from '@emotion/styled'

const CastBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    overflow-y: hidden;
	 height: 120px;
	 height: auto;
`
const ActorCard = styled.div`
    width: calc(100% / 4 - 8px);
    margin-bottom: 1rem;
    margin-right: 0.45rem;
	     width: 100%;
    height: 80px;
    overflow-y: hidden;
    margin-bottom: 6px;
    border-radius: 4px;
`
const ImgContainer = styled.div`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
`
const ActorName = styled.div`
    font-size: 12px;
    line-height: 1rem;
    font-family: 'GilroyBold';
`
 const Cast = () => {
  return (
	  <CastBox>
	 <ActorCard>
	 	<ImgContainer >
			<img src={testImg} alt='Actor picture'/>
		</ImgContainer>
		<ActorName>Actor's name</ActorName>
	 </ActorCard>
	 </CastBox>
  )
}
export default Cast


