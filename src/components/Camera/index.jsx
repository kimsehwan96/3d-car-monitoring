import { useCamera } from "./CameraContext";
import { useEffect, useRef } from "react";

const Camera = () => {
  const { position } = useCamera()
  const ref = useRef()
  const fov = 45
  const aspect = 2
  const near = .1
  const far = 100

  useEffect(() => {
    const setCamera = ref.current
    console.log(position)
  }, [])

  return <perspectiveCamera ref={ref} position={position} />
}

export default Camera