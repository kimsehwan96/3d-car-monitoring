import { useLoader } from "@react-three/fiber"
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import {useEffect} from "react";


const Model = props => {
  const model = useLoader(
      FBXLoader,
      props.path
  )

  useEffect(() => {
    model.recieveShadow = true
    model.castShadow = true
  }, [])


  return <primitive object={model} {...props} />
}

export default Model