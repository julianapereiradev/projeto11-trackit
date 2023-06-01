import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/logo-trackit.png";
import { useContext, useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { Context } from "../context/Context";

export default function Cadastro() {

  const {
    image,
    setImage,
    enabled,
    setEnabled
  } = useContext(Context)

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function RegisterUser(e) {
    e.preventDefault();
    setEnabled(true)

    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";

    const novo = { email, name, image, password };

    const promise = axios.post(URL, novo);

    promise.then((resposta) => {
      console.log("resposta.data", resposta.data);
      navigate("/");
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
    <DivLoginContainer onSubmit={RegisterUser}>

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
      <input
        type="text"
        placeholder="nome"
        required
        disabled={enabled}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="url"
        placeholder="foto"
        required
        disabled={enabled}
        value={image}
        onChange={(e) => setImage(e.target.value)}
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
          "Cadastrar"
        )}
      </button>

      <Link to={`/`} style={{ color: "#52b6ff", fontSize: "14px" }}>
        Já tem uma conta? Faça login!
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
