import styled from "styled-components";
import Topo from "../components/Topo";
import Menu from "../components/Menu";
import { useContext, useEffect } from "react";
import { Context } from "../context/Context";
import axios from "axios";

import AddHabito from "../components/AddHabito";
import ItemHabito from "../components/ItemHabito";

export default function Habitos() {
  const { 
    renderAdd, 
    setRenderAdd, 
    token, 
    habitsList, 
    setHabitsList 
  } = useContext(Context);

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
      console.log(
        "resposta.data em: GET no Habitos via useEffect:",
        resposta.data
      );
    });

    promise.catch((erro) => {
      alert(erro.response.data.message);
      console.log("erro em: GET no Habitos via useEffect:", erro);
    });
  }, []);

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
      console.log(
        "resposta.data em: GET no Habitos para recarregar lista Habitos:",
        resposta.data
      );
    });

    promise.catch((erro) => {
      alert(erro.response.data.message);
      console.log(
        "erro em: GET no Habitos para recarregar lista Habitos:",
        erro
      );
    });
  }

  return (
    <>
      <Topo />

      <DivContainer>

        <DivAdcHabito>
          <h2>Meus Hábitos</h2>
          <button onClick={() => setRenderAdd(true)}>+</button>
        </DivAdcHabito>

        <DivContainerListaHabitos>
          {renderAdd && (
            <AddHabito reloadAfterAddOrDelete={reloadAfterAddOrDelete} />
          )}

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
              Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
              para começar a trackear!
            </p>
          )}
        </DivContainerListaHabitos>

      </DivContainer>

      <Menu />
    </>
  );
}

const DivContainer = styled.div`
  padding: 30px;
  margin-bottom: 80px;
`;

const DivAdcHabito = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 20px;

  button {
    width: 35px;
    height: 35px;
    text-align: center;
    background-color: #52b6ff;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    font-size: 20px;
  }

  h2 {
    color: #126ba5;
    font-weight: 400;
    font-size: 23px;
  }
`;

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
