import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

	body {
		max-width: 400px;
		height: 100vh;
		font-family: 'Lexend Deca', sans-serif;
	}

	input {
		background: #FFFFFF;
		border: 1px solid #D4D4D4;
		border-radius: 5px;
		height: 45px;
		margin-bottom: 7px;
		font-family: 'Roboto';
		font-size: 20px;
		display: flex;
		align-items: center;
		padding-left: 10px;
		&::placeholder{
			font-style: normal;
			color: #DBDBDB;
			font-family: 'Lexend Deca', sans-serif;
			font-weight: 500;
		}	
	}

	button {
		background-color: #52B6FF ;
		color: #FFFFFF;
		font-family: 'Lexend Deca', sans-serif;
		border-radius: 5px;
		border: none;
		cursor: pointer;
	}
`

export default GlobalStyle