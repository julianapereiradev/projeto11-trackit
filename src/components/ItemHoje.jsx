import { useContext, useState } from "react";
import styled from "styled-components";
import { Context } from "../context/Context";
import axios from "axios";

export default function ItemHoje(props) {

  const { 
    currentSequence, 
    done, 
    highestSequence, 
    id, 
    name
  } = props;
  
  const { 
    token, 
    setTodaysHabitsList, 
    setTotalVerdadeiros 
  } = useContext(Context);

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
        "resposta.data em: GET no ItemHoje para recarregar lista Hoje:",
        resposta.data
      );
    });

    promise.catch((erro) => {
      alert(erro.response.data.message);
      console.log("erro em: GET no ItemHoje para recarregar lista Hoje:", erro);
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
        console.log("r em: POST no ItemHoje para desmarcar ItemHoje:", r);
      });

      promise.catch((erro) => {
        alert(erro.response.data.message);
        console.log("erro em: POST no ItemHoje para desmarcar ItemHoje:", erro);
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
        console.log("r em: POST no ItemHoje para marcar ItemHoje:", r);
      });

      promise.catch((erro) => {
        alert(erro.response.data.message);
        console.log("erro em: POST no ItemHoje para desmarcar ItemHoje:", erro);
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

      <CheckboxButton 
        onClick={handleChange} 
        checked={isChecked}
      >
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
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 7px;
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

const CheckboxButton = styled.button`
  background-color: ${(props) => (props.checked ? "#8FC549" : "#EBEBEB")};
  margin-right: 10px;
  width: 70px;
  height: 70px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

const Checkmark = styled.span`
  background-color: ${(props) => (props.checked ? "#8FC549" : "#EBEBEB")};
  width: 70px;
  height: 70px;

  ion-icon {
    color: #ffffff;
    font-size: 50px;
  }
`;

const SpanSequency = styled.span`
  color: ${(props) => (props.colorsequency ? "#8FC549" : "#666666")};
`;

const RecordSequency = styled.span`
  color: ${(props) => (props.colorrecord ? "#8FC549" : "#666666")};
`;

