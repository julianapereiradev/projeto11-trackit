import styled from "styled-components";
import { useContext } from "react";
import { Context } from "../context/Context";
import RegistrarHabito from "./RegistrarHabito";
import axios from "axios";
import ItemHabito from "./ItemHabito";

export default function ListaHabitos() {
  const {
    add,
    token,
    habitsList,
    setHabitsList,
  } = useContext(Context);

  function reloadAfterAddOrDelete() {
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
      console.log("resposta.data do get RELOAD DPS DE ADD", resposta.data);
    });

    promise.catch((erro) => {
      alert(erro.response.data.message);
      console.log("ERRO DE RELOAD HABITOS AQUI:", erro);
    });
  }

  console.log("habits list aqui em listahabitos:", habitsList);

  return (
    <HabitsList>
      {add && <RegistrarHabito reloadAfterAddOrDelete={reloadAfterAddOrDelete} />}

      {habitsList.length > 0 ? (
        habitsList.map((item) => (
            <ItemHabito
            key={item.id}
            id={item.id}
            name={item.name}
            days={item.days}
            reloadAfterAddOrDelete={reloadAfterAddOrDelete}
            />
        ))
      ) : (
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      )}
    </HabitsList>
  );
}

export const HabitsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    width: auto;
    height: 74px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #666666;
    padding: 0 15px;
  }
`;
