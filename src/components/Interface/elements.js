import styled from "styled-components"
import Speedometer from "./Speedometer";

export const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  left: -40em;
  top: -43em;
  width: 98vw;
  height: 100vh;
  text-align: center;
  padding: 10px 10px 20px;
  box-sizing: border-box;
  background-size: 200% 200%;
  color: #fff;
`

export const LogoWrap = styled.figure`
  width: 5.25em;
  height: 5.25em;
  border-radius: 50%;
  padding: 0;
  background: #D9D9D9;
  box-shadow: 0 0 20px 0 #D9D9D9;
`
export const OutLogo = styled.div`
  width: 5em;
  height: 5em;
  border-radius: 50%;
  padding: 2px;
  box-shadow: 0 0 5px 2px #000;
  background: #111;
`

export const SetSpeedometer = styled(Speedometer)`
  position: absolute;
  top: 5em;
  
`