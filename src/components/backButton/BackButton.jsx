import { Link } from "react-router-dom";
import styled from '@emotion/styled';
import { BsChevronLeft } from 'react-icons/bs';

const ButtonContainer = styled.div`
	position: absolute;
	top: 1.4rem;
	left: 1rem;
	/* border: 1px solid yellow; */
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
			<ButtonContainer>
				<Link to={`/movies`}>
					<ChevronContainer>
						<BsChevronLeft 
							color='#FFFFFF'
							opacity='0.5'
							size='15px'
						/>
					</ChevronContainer>
					<Back>Back</Back>
				</Link>
				
			</ButtonContainer>
		</>
	)
}


