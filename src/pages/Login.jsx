import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/logo-trackit.png";

export default function Login() {
  return (
    <DivLoginContainer>
      <img src={logo} />
      <p>TrackIt</p>
      <input 
      type="email" 
      placeholder="email"
      required 
      />
      <input 
      type="password" 
      placeholder="senha"
      required 
      />
      <button type="submit" >Entrar</button>
      <Link to={`/cadastro`} style={{ color: "#52b6ff", fontSize: "14px" }}>
        Não tem uma conta? Cadastre-se!
      </Link>
    </DivLoginContainer>
  );
}

const DivLoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 70px;

  img {
    width: 180px;
  }

  p {
    font-family: "Playball", cursive;
    font-size: 69px;
    color: #126ba5;
    margin-bottom: 40px;
  }

  button {
		height: 45px;
		width: 303px;
    font-size: 21px;
    margin-bottom: 30px;
  }
`;
