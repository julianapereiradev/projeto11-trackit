import styled from "styled-components";
import Topo from "../components/Topo";
import Menu from "../components/Menu";
// import ItemHabitos from "../components/ItemHabitos";
// import CriarHabito from "../components/CriarHabito";
import { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import ListaHabitos from "./ListaHabitos";
import axios from "axios";

export default function Habitos() {

  const { 
    setAdd, 
    token, 
    setHabitsList,
  } = useContext(Context)

  useEffect(() => {
    const URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const promise = axios.get(URL, config);

  promise.then((resposta) => {
    setHabitsList(resposta.data);
    console.log("resposta.data do get no USEEFFECT:", resposta.data);
  });

  promise.catch((erro) => {
    alert(erro.response.data.message);
    console.log("ERRO DE do get no USEEFFECT:", erro);
  });
  
  },[])

  
  return (
    <>
      <Topo />

      <DivContainer>

        <DivAdcHabito>
          <h2>Meus Hábitos</h2>
          <button onClick={() => setAdd(true)}>+</button>
        </DivAdcHabito>

        <ListaHabitos />

      </DivContainer>

      <Menu />
    </>
  );
}

const DivContainer = styled.div`
  margin-top: 80px; /* Altura da navbar + espaço de margem */
  margin-left: 10px;
  margin-right: 10px;

  p {
    color: #666666;
    font-weight: 400;
    font-size: 18px;
  }
`;

const DivAdcHabito = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  button {
    width: 40px;
    height: 35px;
    font-size: 26px;
    text-align: center;
  }

  h2 {
    color: #126ba5;
    font-weight: 400;
    font-size: 23px;
  }
`;
