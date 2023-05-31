import { Link, useNavigate } from "react-router-dom";
import { Context } from "../context/Context";
import styled from "styled-components";
import logo from "../images/logo-trackit.png";
import { useContext, useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function Login() {
  const { userInfo, setUserInfo } = useContext(Context);

  const navigate = useNavigate();

  const [isDisabled, setIsDisabled] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function LoginUser(e) {
    e.preventDefault();

    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";

    const novoLogin = { email, password };

    const promise = axios.post(URL, novoLogin);

    setIsDisabled(true);

    promise.then((resposta) => {
      console.log(resposta.data.token);
      console.log("resposta.data de login:", resposta.data);

      setUserInfo(resposta.data);

      navigate("/hoje");
    });

    promise.catch((erro) => {
      alert(erro.response.data.message);
      setIsDisabled(false);
      console.log("ERRO DE LOGIN AQUI:", erro);
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

      <button type="submit" disabled={isDisabled}>
        {isDisabled ? (
          <ThreeDots type="ThreeDots" color="#fff" height={20} width={50} />
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
  }
`;
