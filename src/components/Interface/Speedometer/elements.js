import styled from "styled-components"

export const Background = styled.div`
  width: 400px;
  margin: auto;
  position: absolute;
  bottom: 0;
  right: 0;
`

export const InnerTextWrap = styled.div`
  position: absolute;
  top: 50%;
  right: ${({offset}) =>
          String(offset).length > 2
          ? '27%'
          : String(offset).length > 1
          ? "33%"
          : "40%"
  };
  left: 50%;
  transform: translate(-50%, -50%);
`

export const InnerText = styled.div`
  display: flex;
  align-items: end;
`

export const Number = styled.p`
  margin: 0;
  font-size: 48px;
`

export const Unit = styled.p`
  margin: 0;
  font-size: 12px;
  padding: 0 5px 5px;
`

export const Wrapper = styled.div`
  width: 400px;
  height: 400px;
  transform: rotate(40deg);
`