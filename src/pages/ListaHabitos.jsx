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
      console.log("resposta.data em: GET no ListaHabitos para recarregar lista Habitos:", resposta.data);
    });

    promise.catch((erro) => {
      alert(erro.response.data.message);
      console.log("erro em: GET no ListaHabitos para recarregar lista Habitos:", erro);
    });
  }

  return (
    <DivContainerListaHabitos >
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
      
    </DivContainerListaHabitos>
  );
}

export const DivContainerListaHabitos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-family: "Lexend Deca";
    font-size: 18px;
    color: #666666;
    line-height: 22px;
  }
`;
