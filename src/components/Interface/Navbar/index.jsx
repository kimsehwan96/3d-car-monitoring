import React from "react"
import {
  Container,
} from "./elements"
import Items from "./Items";


const Navbar = ({ setPosition }) => {
  return (
    <Container>
      <Items setPosition={setPosition} />
    </Container>
  )
}

export default Navbar