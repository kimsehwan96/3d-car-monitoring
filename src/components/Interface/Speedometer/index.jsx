import React, {useState} from 'react'
import {Background, InnerText, InnerTextWrap, Number, Unit, Wrapper} from "./elements";
import SpeedIndicator from "./speedIndicator";
import MeterSvg from "./MeterSvg";

const Speedometer = () => {
  const [offset, setOffset] = useState(30)

  return (
    <Background>
      <SpeedIndicator />
      <InnerTextWrap offset={offset}>
        <InnerText>
          <Number>{offset}</Number>
          <Unit>km/hr</Unit>
        </InnerText>
      </InnerTextWrap>

      <MeterSvg offset={offset} />
    </Background>
  )
}

export default Speedometer