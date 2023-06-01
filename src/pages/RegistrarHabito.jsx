import styled from "styled-components";
import { useContext } from "react";
import { Context } from "../context/Context";
import { ThreeDots } from "react-loader-spinner";
import diasDaSemana from "../constants/diasdasemana";
import axios from "axios";

export default function RegistrarHabito(props) {

const {reloadAfterAddOrDelete} = props

  const {
    setAdd,
    token,
    name,
    setName,
    enabled,
    setEnabled,
    days,
    setDays,
  } = useContext(Context);

  function cliqueiDiaSemana(id) {
    if (days.includes(id)) {
      setDays(
        [...days].filter((idsInEscolhiDia) => {
          if (idsInEscolhiDia !== id) {
            return true;
          } else {
            return false;
          }
        })
      );
    } else {
      setDays([...days, id]);
    }
  }

  console.log("days aqui:", days);
  console.log("name aqui:", name);

  function adicionar() {
    setEnabled(true);

    if (days.length > 0 && name.length > 0) {
      const URL =
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

      const novo = { name, days };

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const promise = axios.post(URL, novo, config);

      promise.then((resposta) => {
        console.log("resposta.data DE ADC HABITO", resposta.data);

        setDays([]);
        setName("");
        setAdd(false);
        reloadAfterAddOrDelete()
        setEnabled(false);
        //function recarregar pag toda vez q um novo dia é adc
      });

      promise.catch((erro) => {
        alert(erro.response.data.message);
        setEnabled(false);
        console.log("ERRO DE ADICIONAR HABITO AQUI:", erro);
      });
    } else {
      alert("Escreve o nome do hábito e escolha pelo menos um dia da semana");
      setEnabled(false);
    }
  }

  function cancelar() {
    setAdd(false);
  }

  return (
    <RegisterHabit>
      <input
        type="text"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={enabled}
        placeholder="nome do hábito"
      />

      <Week>
        {diasDaSemana.map((buttonDia) => (
          <ButtonDays
            key={buttonDia.id}
            id={buttonDia.id}
            disabled={enabled}
            daysW={days.includes(buttonDia.id)}
            onClick={() => cliqueiDiaSemana(buttonDia.id)}
          >
            {buttonDia.day}
          </ButtonDays>
        ))}
      </Week>

      <Buttons>
        <ButtonCancelar onClick={cancelar}>Cancelar</ButtonCancelar>
        <ButtonAdicionar type="submit" disabled={enabled} onClick={adicionar}>
          {enabled ? (
            <ThreeDots type="ThreeDots" color="#fff" height={20} width={50} />
          ) : (
            "Salvar"
          )}
        </ButtonAdicionar>
      </Buttons>
    </RegisterHabit>
  );
}

export const RegisterHabit = styled.div`
  height: 180px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  padding: 0 20px;

  > input {
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 35px;
`;

export const Week = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
`;

export const ButtonDays = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #cfcfcf;
  border-radius: 5px;
  margin-right: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  color: #dbdbdb;
  background-color: ${(props) =>
    props.daysW === true ? "#CFCFCF" : "#FFFFFF"};
`;

export const ButtonAdicionar = styled.button`
  width: 84px;
  height: 35px;
  cursor: pointer;
  background-color: #52b6ff;
  color: #ffffff;
  font-family: "Lexend Deca", sans-serif;
  border-radius: 5px;
  border: none;
`;

export const ButtonCancelar = styled.button`
  width: 84px;
  height: 35px;
  background-color: #ffffff;
  color: #52b6ff;
  margin-right: 10px;
  cursor: pointer;
  border: none;
`;
