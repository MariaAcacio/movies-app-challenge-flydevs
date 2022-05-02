import styled from "@emotion/styled";

export const CoverContent = styled.div`
	margin: 0 -16px;
	height: 298px;
	position: absolute;
	height: 298px;
	width: 375px;
	overflow: hidden;
	z-index: -1;
`
export const ButtonBox = styled.div`
	
`
export const EmptyCover = styled.div`
	width: 100%;
   height: inherit;
   position: absolute;
	background: linear-gradient(180deg, rgba(25, 25, 38, 0.0001) -200%, #191926 92.15%);
	z-index: 1;
`
export const ImgCover = styled.img`
	width: 100%;
	height: inherit;
   object-fit: cover;
	z-index: 1;
`
export const GeneralContent = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	z-index: 3;
	position: relative;
	top: 4rem;
`
export const ActorTitle = styled.h2`
	font-family: 'GilroyBold';
	font-weight: 800;
	font-size: 40px;
	line-height: 40px;
	letter-spacing: -0.5px;
	text-align: left;
	padding: 1rem 5rem 0 0;
`
export const ActorDataContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex: 1;
`
export const ActorImgContainer = styled.div`
	width: 80px;
	height: 80px;
	object-fit: cover;
	object-position: 50% 50%;
	border-radius: 4px;
`
export const ActorImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: 50% 50%;
	border-radius: 4px;
`
export const ActorData = styled.div`
	font-family: 'GilroyLight';
	font-style: normal;
	font-weight: 300;
	font-size: 14px;
	line-height: 20px;
	display: flex;
	flex-direction: column;
	text-align: left;
	flex: 0 0 70%;
	align-items: flex-start;
	padding: 0.5rem 0 0 0;
	/* border: 1px solid yellow; */
	.occupation {
		color: #FF3365;
	}
`
export const TitleAndButtonContainer = styled.div`
	font-family: 'GilroyBold';
	display: flex;
	flex:1 0 90%;
	justify-content: space-between;
	background: linear-gradient(152.39deg, #ECECEC 25.4%, #C4C4C4 52.32%, #FFFFFF 82.83%);
	-webkit-background-clip: text;
	background-clip: text;
	text-shadow: 0px 6px 12px rgba(0, 0, 0, 0.5);
	padding: 30px 0 0 0;
	gap:180px;
	p{
		-webkit-text-fill-color: transparent;
	}
	button{
		border: none;
		font-family: 'GilroyLight';
		background-color: transparent;
		color: #FFFFFF;
		opacity: 0.5;
	}
`
export const ActorsFilmContent = styled.div`
	display: flex;
	gap: 6px;
	overflow-x: scroll;
	
`
export const Biography = styled.div`
	padding: 30px 0 10px 0;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`
export const BiographyTitle =styled.div`
	font-family: 'GilroyBold';
	font-weight: 800;
	font-size: 14px;
	line-height: 20px;
	background: linear-gradient(152.39deg, #ECECEC 25.4%, #C4C4C4 52.32%, #FFFFFF 82.83%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	text-shadow: 0px 6px 12px rgba(0, 0, 0, 0.5);
`
export const ActorText= styled.div`
	/* border: 1px solid red; */
	width: 342px;
	font-family: 'GilroyLight';
	font-style: normal;
	font-weight: 300;
	font-size: 14px;
	line-height: 20px;
	display: flex;
	overflow-wrap:hidden;
	flex-wrap: wrap;
	p{
		position: relative;
		mix-blend-mode: normal;
		opacity: 0.75;
		text-align: left;
	}
`