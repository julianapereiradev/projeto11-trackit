import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

	body {
		max-width: 400px;
		height: 100vh;
		font-family: 'Lexend Deca', sans-serif;
		background-color: #E5E5E5;
	}

	input {
		border: 1px solid #D4D4D4;
		border-radius: 5px;
		height: 45px;
		width: 100%;
		margin-bottom: 7px;
		font-family: 'Roboto';
		font-size: 20px;
		display: flex;
		align-items: center;
		
		
		font-family: 'Lexend Deca', sans-serif;
		&::placeholder{
			font-style: normal;
			color: #DBDBDB;
			font-family: 'Lexend Deca', sans-serif;
			font-weight: 500;
		}	
	}
`

export default GlobalStyle