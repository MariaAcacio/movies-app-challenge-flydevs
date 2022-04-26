import styled from "@emotion/styled"

const ReviewsContent = styled.div`
	top: -6.3rem;
	text-align: center;
	font-family: 'GilroyBold';
	font-style: normal;
	font-weight: 800;
	font-size: ${({isReviewTextSize})=> isReviewTextSize ? '7px' : '18px'};
	line-height: 12px;
	display: flex;
	align-items: center;
	text-transform: uppercase;
	color: #6D6D80;
`
export const Reviews = ({popularity, isReviewTextSize}) => {
  return (
	 <ReviewsContent isReviewTextSize = {isReviewTextSize}>
		{`${parseInt(popularity)} reviews`}		
	 </ReviewsContent>
  )
}


