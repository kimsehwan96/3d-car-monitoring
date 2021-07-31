import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 1em;
  top: 9em;
  width: 10vw;
  height: 70vh;
  list-style: none;
`

export const BtnWrap = styled.div`
  position: absolute;
  left: 2em;
  top: 0;
  width: 5em;
  height: 5em;
  border-radius: 30%;
  padding: 0;
  background: #D9D9D9;
  box-shadow: 0 0 20px 0 #D9D9D9;
`

export const CustomBtn = styled.button`
  position: absolute;
  top: -.1em;
  left: 2em;
  border: none;
  width: 6.5em;
  height: 6.5em;
  border-radius: 30%;
  background: #151515;
  cursor: pointer;
  
  :hover {
    color: aquamarine;
  }
`