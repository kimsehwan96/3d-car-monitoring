import { createContext, useContext } from "react"

const CameraContext = createContext({})

const CameraProvider = props => {
  const camera = {
    position: [0, 5, 12],
    fov: 50,
  }

  return <CameraContext.Provider value={camera}>
    {props.children}
  </CameraContext.Provider>
}

export default CameraProvider

export const useCamera = () => useContext(CameraContext)
