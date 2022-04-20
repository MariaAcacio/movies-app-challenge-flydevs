import styled from '@emotion/styled';
import React from 'react'
import { BsStarHalf, BsStar, BsStarFill } from 'react-icons/bs';

const SpanStars = styled.span`
	margin-right: 5px;
`
export const StarRating = ({score=5}) => {
  let positions = new Array(5).fill(null);
  const stars = positions.map((pos,id) => {
		if(score>=2){
			score-=2;
			return <BsStarFill size='7px'color='#FF3365' className="icon" key={id} />
		}
		if(score===1){
			score--;
			return <BsStarHalf size='7px'color='#FF3365' className="icon" key={id} />
		}
		return <BsStar size='7px'color='#FF3365' className="icon" key={id} />
	});

  return (
    <SpanStars>{stars}</SpanStars>
    
  );
}