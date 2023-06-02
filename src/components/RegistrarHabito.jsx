import styled from "styled-components";
import { useContext } from "react";
import { Context } from "../context/Context";
import { ThreeDots } from "react-loader-spinner";
import diasDaSemana from "../data/diasdasemana";
import axios from "axios";

export default function RegistrarHabito(props) {

const {reloadAfterAddOrDelete} = props

  const {
    setAdd,
    token,
    name,
    setName,
    disable,
    setDisable,
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

  // console.log("days aqui:", days);
  // console.log("name aqui:", name);

  function adicionar() {

    setDisable(true);

    if (days.length > 0 && name.length > 0) {
      const URL =
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

      const adicionar = { name, days };

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const promise = axios.post(URL, adicionar, config);

      promise.then((resposta) => {
        console.log("resposta.data em: POST de Adicionar novo Habito", resposta.data);
        setDays([]); //volta a ficar limpo para adc um novo conjunto de dias
        setName("");
        setAdd(false);
        reloadAfterAddOrDelete()
        setDisable(false);
      });

      promise.catch((erro) => {
        alert(erro.response.data.message);
        setDisable(false);
        console.log("erro em: POST de Adicionar novo Habito", erro);
      });
    } else {
      alert("Escreve o nome do hábito e escolha pelo menos um dia da semana");
      setDisable(false);
    }
  }

  return (
    <DivRegistrarHabito>

      <div>
        <DivInput>
      <input
        type="text"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={disable}
        placeholder=" nome do hábito"
      />
      </DivInput>
      </div>

      <div>
        <ListCalendar>
        {diasDaSemana.map((buttonDia) => (
          <ButtonCalendar
            key={buttonDia.id}
            id={buttonDia.id}
            disabled={disable}
            daysIncludes={days.includes(buttonDia.id)}
            onClick={() => cliqueiDiaSemana(buttonDia.id)}
          >
            {buttonDia.day}
          </ButtonCalendar>
        ))}
        </ListCalendar>
      </div>

      <div>
        <ListButtons>
        <ButtonCancelar onClick={() => setAdd(false)}>Cancelar</ButtonCancelar>
        <ButtonAdicionar type="submit" disabled={disable} onClick={adicionar}>
          {disable ? (
            <ThreeDots type="ThreeDots" color="#fff" height={20} width={50} />
          ) : (
            "Salvar"
          )}
        </ButtonAdicionar>
        </ListButtons>
      </div>
    </DivRegistrarHabito>
  );
}

export const DivRegistrarHabito = styled.div`
  background-color: white;
  width: 100%;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 30px;
  border-radius: 5px;
`;


export const DivInput = styled.div`
  input {
    width: 90%;
    margin-left: 15px;
  }
`;

export const ListCalendar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-left: 15px;
`;

export const ListButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 25px;
`;
export const ButtonCalendar = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: 1px solid #cfcfcf;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 5px;
  font-family: "Lexend Deca";
  font-size: 20px;
  color: ${(props) =>
    props.daysIncludes === true ? "#FFFFFF" : "#DBDBDB"};
  background-color: ${(props) =>
    props.daysIncludes === true ? "#CFCFCF" : "#FFFFFF"};
`;

export const ButtonAdicionar = styled.button`
  width: 84px;
  height: 35px;
  font-family: "Lexend Deca";
  cursor: pointer;
  background-color: #52b6ff;
  color: #ffffff;
  font-family: "Lexend Deca", sans-serif;
  border-radius: 5px;
  border: none;
  margin-right: 10px;
  font-size: 16px;
`;

export const ButtonCancelar = styled.button`
  width: 84px;
  height: 35px;
  font-family: "Lexend Deca";
  background-color: #ffffff;
  color: #52b6ff;
  margin-right: 10px;
  cursor: pointer;
  border: none;
  font-size: 16px;
`;
