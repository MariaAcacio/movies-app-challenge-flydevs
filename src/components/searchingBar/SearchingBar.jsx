import styled from '@emotion/styled'

const Bar = styled.div`
	/* background-color: red; */
	padding: 62px;
	width: 100%;
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
const SearchingBar = () => {
  return (
	 <Bar>
		  <InputSearch
		  	id="search"
			type='search'
			placeholder='Search...'
		  />
		</Bar>
  )
}

export default SearchingBar
