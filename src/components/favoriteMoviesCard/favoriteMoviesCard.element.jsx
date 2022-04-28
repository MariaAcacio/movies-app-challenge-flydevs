import styled from '@emotion/styled'

export const CardContainer = styled.div`
	background: radial-gradient(
		73.32% 73.32% at 23.55% 26.12%, 
		rgba(64, 64, 86, 0.546214) 0%, 
		rgba(34, 34, 50, 0.55) 100%
	);
	height: 250px;
	padding: 0.5px;
	box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.5);
	border-radius: 8px;
	margin-bottom: 11px;
	border:1px solid  rgba(95, 95, 117, 0.346);
	overflow: hidden;
	position: relative;
`
export const MovieImage = styled.img`
	width: 166px;
   height: 248px;
	display: table-row;
	border-radius:2px ;
`
export const EmptyCard = styled.div`
	width: 100%;
   height: 100%;
   position: absolute;
   background: linear-gradient(180deg, rgba(25, 25, 38, 0.0001) 22.31%, #191926 87.5%);
`
export const HeartContainer = styled.div`
	position: absolute;
	top:0.02rem;
	right: 165px;	
`
export const Genrebox = styled.div`
	width: 150px;
	height: 10px;
	position: relative;
	top: -45px;
	left: calc(50% - 146px/2 - 86px);
`
export const ReviewAndStarBox = styled.div`
	position: absolute;
	height: 20px;
	width: 110px;
	left: calc(50% - 146px/2 - 86px);
	top: 225px;
	font-size: 7px;
	display: flex;
	align-items: center;
`
export const StarIconsBox = styled.span`
	margin-right: 5px;
`
export const MovieNameBox = styled.div`
	width: 9.4rem;
	height: auto;
	position: relative;
	bottom: 16.5rem;
	left: 6.3rem;
	display: inline-flex;
`
export const MoviesDurationBox = styled.div`
	position: relative;
	right: 3.10rem;
	bottom:14.8rem;
	font-family: 'GilroyBold';
	font-style: normal;
	font-size: 8px;
	line-height: 12px;
	display: inline-flex;
	align-items: center;
	text-transform: uppercase;
	color: #565665;
`
export const OverviewContainer = styled.div`
	position: absolute;
	width: 8.8rem;
	height: 72px;
	left: 11.23rem;
	top: calc(50% - 99px/2);
	font-family: 'GilroyLight';
	font-size: 8px;
	line-height: 12px;
	display: flex;
	align-items: center;
	letter-spacing: -0.133333px;
`
export const OverviewContent = styled.p`
	text-align: left;
	mix-blend-mode: normal;
	opacity: 0.75;
	font-style: normal;
	font-weight: 300;
	line-height: 13px;
	margin-bottom: 1.5rem;
`
export const ButtonContainer = styled.div`
	position: absolute;
	top: 13.6rem;
	right: 0.8rem;
	display: inline-flex;
`
export const BookButton = styled.button`
	padding: 7px 32px 7px 32px;
	background: linear-gradient(149.18deg, #8036E7 -24.9%, #FF3365 89.41%);
	box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.5);
	border-radius: 12px;
	border: none;
	font-family: 'GilroyBold';
	font-size: 8px;
	font-weight: 800;
	text-transform: uppercase;
	color: #fff;
`