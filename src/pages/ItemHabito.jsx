import { useContext } from "react";
import styled from "styled-components";
import { Context } from "../context/Context";
import diasDaSemana from "../constants/diasdasemana";
import { TrashOutline } from "react-ionicons";
import axios from "axios";

export default function ItemHabito(props) {
  const { token } =
    useContext(Context);

  const { id, name, days, reloadAfterAddOrDelete } = props;

function deletarItemHabito(id) {
    if (window.confirm("Tem certeza que quer deletar este item?")) {
        
        const URL =
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;
  
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      const promise = axios.delete(URL, config);
  
      promise.then(reloadAfterAddOrDelete);
  
      promise.catch((erro) => {
        alert(erro.response.data.message);
        console.log("erro no momento de deletarItemHabito:", erro);
      });

      } else {
        console.log('Cancelou a ação')
      }
}

  return (
    <Habit>
      <InfoHabits>
        <Inline>
          <h1>{name}</h1>
          <TrashIcon onClick={() => deletarItemHabito(id)}></TrashIcon>
        </Inline>

        <Week>
          {diasDaSemana.map((buttonDia) => (
            <ButtonDays
              key={buttonDia.id}
              id={buttonDia.id}
              daysW={days.includes(buttonDia.id)}
            >
              {buttonDia.day}
            </ButtonDays>
          ))}
        </Week>
      </InfoHabits>
    </Habit>
  );
}

export const Habit = styled.div`
  width: 100%;
  height: 91px;
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 0 10px;
`;

export const InfoHabits = styled.div`
  margin: 10px;

  h1 {
    margin-bottom: 10px;
  }
`;

export const Inline = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

export const TrashIcon = styled(TrashOutline)`
  width: 18px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;