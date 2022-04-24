import styled from "@emotion/styled";

const RatingBox = styled.div`
	font-family:'GilroyBold';
	font-size: 12px;
	padding: 0.4em 0.2em;
	position: absolute;
	top: 0.5rem;
	left: ${({ isShowingCard })=> isShowingCard ? "0.4rem" : "calc(50% - 343px/2)"};
	top: ${({ isShowingCard })=> isShowingCard ? "0.5rem" : "12rem"};
	background: #191926;
	opacity: 0.9;
	border: 1px solid #191926;
	box-sizing: border-box;
	border-radius: 5px;
	color: white;
`

export const Rating = ({score, isShowingCard}) => {
  return (
	 <RatingBox isShowingCard={isShowingCard}>
		{`+${score}`}
	 </RatingBox>
  )
}
