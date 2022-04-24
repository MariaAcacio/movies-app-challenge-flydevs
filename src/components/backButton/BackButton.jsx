import { Link } from "react-router-dom";
import styled from '@emotion/styled';
import { BsChevronLeft } from 'react-icons/bs';

const ButtonContainer = styled.div`
	position: absolute;
	top: ${({isShowingBackText}) => isShowingBackText ? "1.7rem" : "2.9rem"};
	left: 1rem;
`

const ChevronContainer = styled.span`
	position: relative;
	top:0.15rem;
`
const Back = styled.button`
	border: none;
	font-family: 'GilroyLight';
	background-color: transparent;
	color: #FFFFFF;
	opacity: 0.5;
`

export const BackButton = ({ isShowingBackText }) => {
	return (
		<>
			<ButtonContainer isShowingBackText={isShowingBackText}>
				<Link to={`/movies`}>
					<ChevronContainer>
						<BsChevronLeft 
							color='#FFFFFF'
							opacity='0.5'
							size='15px'
						/>
					</ChevronContainer>
					{ isShowingBackText && <Back>Back</Back> }
				</Link>
			</ButtonContainer>
		</>
	)
}


