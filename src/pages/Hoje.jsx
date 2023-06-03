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
  const { token, todayList, setTodayList, arrayDoneTrue, setArrayDoneTrue } =
    useContext(Context);

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
      setTodayList(resposta.data);
      setArrayDoneTrue(resposta.data.filter((i) => i.done == true));
      console.log(
        "resposta.data em: GET no Hoje via useEffect:",
        resposta.data
      );
    });

    promise.catch((erro) => {
      alert(erro.response.data.message);
      console.log("erro em: GET no Hoje via useEffect", erro);
    });
  }, []);

  console.log("arrayDoneTrue aqui::", arrayDoneTrue);

  return (
    <>
      <Topo />

      <DivContainer>
        <h2 data-test="today">
          {diaDaSemana}, {diaMes}{" "}
        </h2>

        <div data-test="today-counter">
          {arrayDoneTrue.length === 0 ? (
            <ColorTitlePercentage isPercentageZero={arrayDoneTrue.length === 0}>
              Nenhum hábito concluído ainda
            </ColorTitlePercentage>
          ) : (
            <ColorTitlePercentage isPercentageZero={arrayDoneTrue.length === 0}>
              {Math.floor(
                (Number(arrayDoneTrue.length) / Number(todayList.length)) * 100
              ) + `% dos hábitos concluídos`}{" "}
            </ColorTitlePercentage>
          )}
        </div>

        {todayList.map((today) => (
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
  margin-top: 70px;
  margin-bottom: 70px;
  padding-top: 50px;
  padding-bottom: 90px;
  padding-left: 10px;
  padding-right: 10px;

  h2 {
    color: #126ba5;
    font-weight: 400;
    font-size: 23px;
    margin-bottom: 5px;
  }
`;

const ColorTitlePercentage = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 30px;
  color: ${(props) => (props.isPercentageZero ? "#BABABA" : "#8FC549")};
`;
