import { useContext, useState } from "react";
import styled from "styled-components";
import { Context } from "../context/Context";
import axios from "axios";

export default function ItemHoje(props) {
  const { currentSequence, done, highestSequence, id, name, today } = props;
  const { token, setTodaysHabitsList } = useContext(Context);

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
          <span style={{ color: "#8FC549" }}>{currentSequence}</span>
        </p>
        <p>
          Seu recorde: <span>{highestSequence}</span>
        </p>
      </DivItemLeft>
      
      <CheckboxContainer>
        <HiddenCheckbox checked={isChecked} onChange={handleChange} />
        <Checkmark checked={isChecked}>
          <ion-icon name="checkmark-sharp"></ion-icon>
        </Checkmark>
      </CheckboxContainer>

      {/* <DivItemRight>
        <div ischeck={done} onClick={() => cliqueiCheck(done)}>
          <ion-icon name="checkmark-sharp"></ion-icon>
        </div>
      </DivItemRight> */}
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

// const DivItemRight = styled.div`
//   margin-right: 10px;

//   div {
//     /* background-color: #8fc549; */
//     background-color: ${(props) => (props.ischeck ? "#8fc549" : "#EBEBEB")};
//     width: 70px;
//     height: 70px;
//     border-radius: 5px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   ion-icon {
//     color: #ffffff;
//     font-size: 40px;
//   }
// `;

const CheckboxContainer = styled.label`
  display: inline-block;
  position: relative;
  padding-left: 45px;
  cursor: pointer;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  width: 40px;
  height: 40px;
`;

const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 40px;
  width: 40px;
  background-color: ${(props) => (props.checked ? "green" : "red")};

  ion-icon {
    color: #ffffff;
    font-size: 40px;
  }
`;
