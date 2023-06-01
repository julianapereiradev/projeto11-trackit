import { useContext, useState } from "react";
import styled from "styled-components";
import { Context } from "../context/Context";
import axios from "axios";

export default function ItemHoje(props) {
  const { currentSequence, done, highestSequence, id, name } = props;
  const { token, setTodaysHabitsList, setTotalVerdadeiros } =
    useContext(Context);

  const [isChecked, setIsChecked] = useState(done);

  function reloadAfterCheckUncheck() {
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
      console.log(
        "resposta.data do get RELOAD DPS DE Marcar/Desmarcar",
        resposta.data
      );
    });

    promise.catch((erro) => {
      alert(erro.response.data.message);
      console.log("ERRO DE RELOAD DPS DE Marcar/Desmarcar:", erro);
    });
  }

  const handleChange = async () => {
    if (isChecked) {
      const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const body = {};

      const promise = axios.post(URL, body, config);

      promise.then((r) => {
        setIsChecked(!isChecked);
        reloadAfterCheckUncheck();
      });

      promise.catch((erro) => {
        alert(erro.response.data.message);
        console.log("ERRO post em HOJE pelo desmarcar:", erro);
      });
    } else {
      const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const body = {};

      const promise = axios.post(URL, body, config);

      promise.then((r) => {
        setIsChecked(!isChecked);
        reloadAfterCheckUncheck();
      });

      promise.catch((erro) => {
        alert(erro.response.data.message);
        console.log("ERRO post em HOJE pelo marcar:", erro);
      });
    }
  };

  return (
    <DivItemHoje>
      <DivItemLeft>
        <h4>{name}</h4>
        <p>
          Sequência atual:{" "}
          <SpanSequency colorsequency={isChecked}>
            {currentSequence} {currentSequence === 1 ? ('dia'):('dias')}
          </SpanSequency>
        </p>
        <p>
          Seu recorde:{" "}
          <RecordSequency
            colorrecord={
              highestSequence > 0 && highestSequence === currentSequence
            }
          >
            {highestSequence} {highestSequence === 1 ? ('dia'):('dias')}
          </RecordSequency>
        </p>
      </DivItemLeft>

      <CheckboxButton onClick={handleChange} checked={isChecked}>
        <Checkmark checked={isChecked}>
          <ion-icon name="checkmark-sharp"></ion-icon>
        </Checkmark>
      </CheckboxButton>
    </DivItemHoje>
  );
}

const DivItemHoje = styled.div`
  background-color: #ffffff;

  height: 94px;
  margin-bottom: 7px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const DivItemLeft = styled.div`
  margin-left: 10px;

  h4 {
    color: #666666;
    font-size: 20px;
    margin-bottom: 8px;
  }

  p {
    color: #666666;
    font-size: 13px;
    margin-bottom: 3px;
  }
`;

const SpanSequency = styled.span`
  color: ${(props) => (props.colorsequency ? "green" : "grey")};
`;

const RecordSequency = styled.span`
  color: ${(props) => (props.colorrecord ? "green" : "grey")};
`;

const CheckboxButton = styled.button`
  background-color: ${(props) => (props.checked ? "green" : "grey")};
  margin-right: 10px;
`;

const Checkmark = styled.span`
  background-color: ${(props) => (props.checked ? "green" : "grey")};

  ion-icon {
    color: #ffffff;
    font-size: 40px;
  }
`;
