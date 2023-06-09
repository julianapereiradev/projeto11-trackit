import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useContext } from "react";
import { Context } from "../context/Context";

export default function Menu() {
  const { 
    todayList, 
    arrayDoneTrue, 
  } = useContext(Context);

  const percentage = ((Number(arrayDoneTrue.length))/(Number(todayList.length)))*100;

  return (
      <DivMenu data-test="menu">

        <LinkMenu data-test="habit-link" to={`/habitos`}>
          Hábitos
        </LinkMenu>

          <DivCircular data-test="today-link">
            <Link to={`/hoje`}>
            <CircularProgressbar
              value={percentage}
              text={`Hoje`}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#52B6FF",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent",
              })}
            />
            </Link>
          </DivCircular>

        <LinkMenu data-test="history-link" to={`/historico`}>
          Histórico
        </LinkMenu>
        
      </DivMenu>
  );
}

const DivMenu = styled.div`
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const DivCircular = styled.div`
 width: 91px;
 margin-Bottom: 40px;
`;

export const LinkMenu = styled(Link)`
 color: #52b6ff;
 font-Size: 14px;
 text-decoration: none;
 font-size: 18px;

`