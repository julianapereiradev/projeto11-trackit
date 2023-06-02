import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

	body {
		max-width: 400px;
		height: 100vh;
		font-family: 'Lexend Deca', sans-serif;
		background-color: #E5E5E5;
	}

	input {
		height: 45px;
		width: 100%;
		font-family: 'Lexend Deca', sans-serif;
		border: 1px solid #D4D4D4;
		border-radius: 5px;
		font-size: 20px;
		display: flex;
		align-items: center;
		margin-bottom: 8px;
		&::placeholder {
			font-family: 'Lexend Deca', sans-serif;
			color: #DBDBDB;
		}	
	}
`

export default GlobalStyle