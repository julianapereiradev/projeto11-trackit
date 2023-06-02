import styled from "styled-components";
import Topo from "../components/Topo";
import Menu from "../components/Menu";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import ItemHoje from "../components/ItemHoje";
import axios from "axios";
import { useContext, useEffect } from "react";
import { Context } from "../context/Context";

export default function Hoje() {
  const {
    token,
    todaysHabitsList,
    setTodaysHabitsList,
    totalVerdadeiros,
    setTotalVerdadeiros,
  } = useContext(Context);

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
      setTotalVerdadeiros(resposta.data.filter((i) => i.done == true));
      console.log("resposta.data em: GET no Hoje via useEffect:", resposta.data);
    });

    promise.catch((erro) => {
      alert(erro.response.data.message);
      console.log("erro em: GET no Hoje via useEffect", erro);
    });
  }, []);

  return (
    <>
      <Topo />

      <DivContainer>
        <h2>
          {diaDaSemana}, {diaMes}
        </h2>

        <h3>
          {totalVerdadeiros.length === 0
            ? "Nenhum hábito concluído ainda"
            : Math.floor(
                (Number(totalVerdadeiros.length) /
                  Number(todaysHabitsList.length)) *
                  100
              ) + "% dos hábitos concluídos"}
        </h3>

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
  padding: 10px;
  margin-bottom: 80px;

  h2 {
    color: #126ba5;
    font-weight: 400;
    font-size: 23px;
    margin-top: 90px;
    margin-bottom: 5px;
  }

  h3 {
    color: #8fc549;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 30px;
  }
`;
