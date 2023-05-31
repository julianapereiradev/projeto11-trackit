import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/logo-trackit.png";
import { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function Cadastro() {
  const navigate = useNavigate();

  const [isDisabled, setIsDisabled] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");

  function RegisterUser(e) {
    e.preventDefault();

    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";

    const novo = { email, name, image, password };

    const promise = axios.post(URL, novo);

    setIsDisabled(true);

    promise.then((resposta) => {
      console.log("resposta.data", resposta.data);
      navigate("/");
    });

    promise.catch((erro) => {
      alert(erro.response.data.message);
      // alert(erro.response.data.message);
      setIsDisabled(false);
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
        disabled={isDisabled}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="senha"
        required
        disabled={isDisabled}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="nome"
        required
        disabled={isDisabled}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="url"
        placeholder="foto"
        required
        disabled={isDisabled}
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <button type="submit" disabled={isDisabled}>
        {isDisabled ? (
          <ThreeDots type="ThreeDots" color="#fff" height={20} width={50} />
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
  }
`;
