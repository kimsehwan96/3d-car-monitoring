import React from "react"
import {
  Container,
  LogoWrap,
  OutLogo,
} from "./elements";
import Navbar from "./Navbar";

const Interface = ({ setPosition }) => {
  return (
      <Container>
        <LogoWrap>
          <OutLogo>
            <img src='/darkLogo.png' alt='logo' style={{ width: '5em', height: '5em' }} />
          </OutLogo>
        </LogoWrap>
        <Navbar setPosition={setPosition} />
      </Container>
  )
}

export default Interface