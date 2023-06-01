import styled from "styled-components";

export default function ItemHoje(props) {
  const { currentSequence, done, highestSequence, id, name } = props;

  return (
    <DivItemHoje>
      <DivItemLeft>
        <h4>{name}</h4>
        <p>
          Sequência atual: <span style={{ color: "#8FC549" }}>{currentSequence}</span>
        </p>
        <p>
          Seu recorde: <span>{highestSequence}</span>
        </p>
      </DivItemLeft>
      <DivItemRight>
        <div ischeck={done}>
          <ion-icon name="checkmark-sharp"></ion-icon>
        </div>
      </DivItemRight>
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

const DivItemRight = styled.div`
  margin-right: 10px;

  div {
    /* background-color: #8fc549; */
    background-color: ${(props) =>
    props.ischeck ? "#8fc549" : "#EBEBEB"};
    width: 70px;
    height: 70px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ion-icon {
    color: #ffffff;
    font-size: 40px;
  }
`;
