import styled from "styled-components";
import Topo from "../components/Topo";
import Menu from "../components/Menu";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import ItemHoje from "../components/ItemHoje";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";

export default function Hoje() {
  const { token, todaysHabitsList, setTodaysHabitsList } = useContext(Context);

  const diaDaSemanaCompleto = dayjs().locale("pt-br").format("dddd");
  const diaMes = dayjs().locale("pt-br").format("DD/MM");

  const removerFeira = diaDaSemanaCompleto.split("-");
  const arraySemana = [...removerFeira[0]];
  const stringSemanaMinuscula = arraySemana.join("");
  const diaDaSemana =
    stringSemanaMinuscula[0].toUpperCase() + stringSemanaMinuscula.substring(1);

  useEffect(() => {
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.get(URL, config);

    promise.then((resposta) => {
      setTodaysHabitsList(resposta.data);
      console.log("resposta get em HOJE pelo useEffect:", resposta.data);
    });

    promise.catch((erro) => {
      alert(erro.response.data.message);
      console.log("ERRO get em HOJE pelo useEffect:", erro);
    });
  }, []);

  console.log("lista de today:", todaysHabitsList);

  return (
    <>
      <Topo />

      <DivContainer>
        <h2>
          {diaDaSemana}, {diaMes}
        </h2>
        <h3>X% dos hábitos concluídos</h3>

        {todaysHabitsList.map((today) => (
          <ItemHoje
            key={today.id}
            currentSequence={today.currentSequence}
            done={today.done}
            highestSequence={today.highestSequence}
            id={today.id}
            name={today.name}
            today={today}
          />
        ))}
      </DivContainer>

      <Menu />
    </>
  );
}

const DivContainer = styled.div`
  margin-top: 80px; /* Altura da navbar + espaço de margem */
  margin-left: 10px;
  margin-right: 10px;

  h2 {
    color: #126ba5;
    font-weight: 400;
    font-size: 23px;
    margin-top: 100px;
    margin-bottom: 5px;
  }

  h3 {
    color: #8fc549;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 30px;
  }
`;
