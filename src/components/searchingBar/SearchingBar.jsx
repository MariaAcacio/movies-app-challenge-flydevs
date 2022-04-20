import styled from '@emotion/styled'
import { FiSearch } from 'react-icons/fi'

const Bar = styled.div`
	padding: 62px;
	width: 100%;
	/* position: relative; */
	
`
const InputSearch = styled.input`
	background-color: transparent;
	border: 1px solid #C7C7E7;
	border-radius: 32px;
	box-sizing: border-box;
	position: absolute;
	width: 375px;
	height: 40px;
	left: 0px;
	top: 44px;
	
`
const GlassIcon = styled.div`
	position: absolute;
	width: 11.73px;
	height: 11.73px;
	left: 344.07px;
	top: 57.07px;
`
const SearchingBar = () => {
  return (
	 <Bar>
	 		<GlassIcon><FiSearch color='#717187'/></GlassIcon>
		  <InputSearch
		  	id="search"
			type='search'
		  />
		</Bar>
  )
}

export default SearchingBar
