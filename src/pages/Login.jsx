import { Link, useNavigate } from "react-router-dom";
import { Context } from "../context/Context";
import styled from "styled-components";
import logo from "../images/logo-trackit.png";
import { useContext, useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function Login() {

  const {
    disable,
    setDisable,
    setToken,
    setImage,
  } = useContext(Context)

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function LoginUser(e) {
    e.preventDefault();
    setDisable(true)

    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";

    const novologin = { email, password };

    const promise = axios.post(URL, novologin);

      promise.then((resposta) => {
      console.log("resposta.data em: POST no Login:", resposta.data);
      setImage(resposta.data.image)
      setToken(resposta.data.token)
      navigate("/hoje");
      setDisable(false)
    });

    promise.catch((erro) => {
      alert(erro.response.data.message);
      setDisable(false)
      console.log("erro em: POST no Login:", erro);
    });
  }

  return (
    <FormLoginContainer onSubmit={LoginUser}>

      <img src={logo} />
      <p>TrackIt</p>

      <input
        data-test="email-input"
        type="email"
        placeholder="  email"
        required
        disabled={disable}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        data-test="password-input"
        type="password"
        placeholder="  senha"
        required
        disabled={disable}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button data-test="login-btn" type="submit" disabled={disable}>
        {disable ? (
          <ThreeDots 
          type="ThreeDots" 
          color="#fff" 
          height={20} 
          width={50} 
          />
        ) : (
          "Entrar"
        )}
      </button>

      <LinkToRegister data-test="signup-link" to={`/cadastro`} >
        Não tem uma conta? Cadastre-se!
      </LinkToRegister>

    </FormLoginContainer>
  );
}

const FormLoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background-color: #FFFFFF;
  max-width: 400px;
  height: 100vh;

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
    width: 100%;
    font-size: 21px;
    margin-bottom: 30px;
    background-color: #52B6FF ;
		color: #FFFFFF;
		font-family: 'Lexend Deca', sans-serif;
		border-radius: 5px;
		border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

export const LinkToRegister = styled(Link)`
 color: #52b6ff;
 font-Size: 14px;
`