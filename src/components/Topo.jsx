import styled from "styled-components";
import { useContext } from "react";
import { Context } from "../context/Context";

export default function Topo() {

const {image} = useContext(Context)

    return (
        <DivTopo>
        <p>TrackIt</p>
        <img src={image} />
      </DivTopo>
    )
}

const DivTopo = styled.div`
  background-color: #126ba5;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  p {
    font-family: "Playball", cursive;
    color: #ffffff;
    font-size: 39px;
    margin-left: 10px;
  }

  img {
    width: 51px;
    height: 51px;
    border-radius: 100px;
    margin-right: 10px;
  }
`;
