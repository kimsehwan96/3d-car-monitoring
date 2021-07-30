import {useRef} from "react";
import {useFrame} from "@react-three/fiber";

const Light = props => {
  const ref = useRef()

  useFrame(() => {
    const lightening = ref.current

    lightening.shininess = 150
  })

  return (
      <mesh {...props}>
        <sphereBufferGeometry args={[.1]} />
        <meshPhongMaterial emissive='white' ref={ref} />
        <pointLight
            position={props.position}
            intensity={.2}
            color={0xfff9c4}
        />
        <spotLight
            castShadow
            intensity={1}
            angle={Math.PI / 20}
            position={[0, -10, 10]}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
        />
      </mesh>
  )
}

export default Light