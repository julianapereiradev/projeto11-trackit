import styled from "styled-components";

export default function Topo() {
    return (
        <DivTopo>
        <p>TrackIt</p>
        <img src="https://i.pinimg.com/736x/29/93/de/2993de8da16f1ab3acb3f402ed6be2a8--school-counselor-school-teacher.jpg" />
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
