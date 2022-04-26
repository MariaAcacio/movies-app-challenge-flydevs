import styled from '@emotion/styled'

const MovieTitle = styled.p`
	font-family: 'GilroyBold';
	font-size:${({ isSmallTitleSize })=> isSmallTitleSize ? '14px':'40px'};
	line-height:${({ isSmallTitleSize })=> isSmallTitleSize ? '14px':'40px'};
	text-align: left;
	align-items: center;
	background: linear-gradient(152.39deg, #ECECEC 25.4%, #C4C4C4 52.32%, #FFFFFF 82.83%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
`
const MovieName = ({title, isSmallTitleSize }) => {
  return (
	 <MovieTitle isSmallTitleSize ={isSmallTitleSize}>
		{title}
	 </MovieTitle>
  )
}

export default MovieName
