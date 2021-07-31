import {
  createContext,
  useContext,
  useReducer
} from 'react'

const CameraContext = createContext(undefined)

const defaultState = {
  position: [0, 0, 0],
  aspect: 2,
  fov: 50,
}

function CameraReducer (state, action) {
  switch(action) {
    case '':
      return { ...state, action }
    default :
      return state
  }
}

export function CameraProvider (props) {
  const [state, action] = useReducer(CameraReducer, defaultState)

  return (
    <CameraContext.Provider value={{ state, action }}>
      {props.children}
    </CameraContext.Provider>
  )
}


export function useCamera () {
  const context = useContext(CameraContext)

  if(!context) throw new Error('useCamera must be used inside a CameraProvider')

  return context
}

