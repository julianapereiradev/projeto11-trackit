import { Link, useNavigate } from "react-router-dom";
import { Context } from "../context/Context";
import styled from "styled-components";
import logo from "../images/logo-trackit.png";
import { useContext, useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function Login() {

  const {
    setImage,
    enabled,
    setEnabled,
    setToken,
  } = useContext(Context)

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function LoginUser(e) {
    e.preventDefault();
    setEnabled(true)

    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";

    const novo = { email, password };

    const promise = axios.post(URL, novo);

      promise.then((resposta) => {
      console.log("resposta.data", resposta.data);
      setImage(resposta.data.image)
      setToken(resposta.data.token)
      navigate("/hoje");
      setEnabled(false)
    });

    promise.catch((erro) => {
      alert(erro.response.data.message);
      // alert(erro.response.data.message);
      setEnabled(false)
      console.log("ERRO DE CADASTRO AQUI:", erro);
    });
  }



  return (
    <DivLoginContainer onSubmit={LoginUser}>

      <img src={logo} />
      <p>TrackIt</p>

      <input
        type="email"
        placeholder="email"
        required
        disabled={enabled}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="senha"
        required
        disabled={enabled}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit" disabled={enabled}>
        {enabled ? (
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
    background-color: #52B6FF ;
		color: #FFFFFF;
		font-family: 'Lexend Deca', sans-serif;
		border-radius: 5px;
		border: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
