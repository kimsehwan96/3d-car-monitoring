import {OrbitControls, OrthographicCamera, PerspectiveCamera} from "@react-three/drei";
import { useRef } from "react";

const Camera = ({ position }) => {
  const ref =useRef()

  const defaultState = {
    position: position,
    aspect: 2,
    fov: 50,
    near: .1,
    far: 50,
    zoom: 1,
  }

  return(
    <>
      <PerspectiveCamera
        ref={ref}
        makeDefault
        {...defaultState}
      />
    </>
  )
}

export default Camera