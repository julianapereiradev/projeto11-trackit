import styled from "styled-components";
import { useContext } from "react"
import { Context } from "../context/Context"
import RegistrarHabito from "./RegistrarHabito";


export default function ListaHabitos() {

    const { 
        add, 
        setAdd, 
        token, 
        setToken, 
        habitsList, 
        setHabitsList,
        enabled,
        setEnabled
      } = useContext(Context)

    return (
        <HabitsList>
           {add && <RegistrarHabito/> }
        </HabitsList>
    )
}

export const HabitsList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    >p {
        width: auto;
        height: 74px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #666666;
        padding: 0 15px;
    }
`