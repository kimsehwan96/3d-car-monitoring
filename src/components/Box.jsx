import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Box = props => {
  const ref = useRef()

  useFrame(state => {
    ref.current.rotation.x += +.01
    ref.current.rotation.y += +.01
  })

  return (
      <mesh ref={ref} {...props} >
        <boxBufferGeometry />
        <meshBasicMaterial color="blue" />
      </mesh>
  )
}

export default Box