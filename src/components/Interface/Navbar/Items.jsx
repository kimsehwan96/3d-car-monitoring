import React from "react"
import {BtnWrap, CustomBtn} from "./elements";
import { GiFlatTire } from 'react-icons/gi'

const Items = ({ setPosition }) => {

  function handleCamera () {
    setPosition([0, 12, 0])
  }

  return (
    <>
      <BtnWrap />
      <CustomBtn onClick={handleCamera}>
        <GiFlatTire
          style={{
            width: '2em',
            height: '2em',
            color: '#333333'
          }}
        />
      </CustomBtn>
    </>
  )
}

export default Items