import {createContext, useContext, useEffect, useReducer} from "react"
import io from 'socket.io'

const URL = "http://3.34.87.77:5000/binder"
const socket = io(URL)

const SocketContext = createContext()
const SocketDispatchContext = createContext()

const SET_SOCKET_DATA = "SET_SOCKET_DATA"

const initialState = {
  total_data: 0,
  data: [],
}

const reducer = (state, action) => {
  switch(action.type) {
    case SET_SOCKET_DATA:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export const SocketProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    try {
        socket.on('rtdata', data => {
        const jsonData = JSON.parse(data)
          setData(jsonData);
      })
    } catch (err) {
      console.log(err)
    }
  }

  const setData = (payload) => dispatch({ type: SET_SOCKET_DATA, payload: payload })

  return (
    <SocketDispatchContext.Provider value={setData}>
      <SocketContext.Provider value={state}>
        {children}
      </SocketContext.Provider>
    </SocketDispatchContext.Provider>
  )
}

export const useSocketContext = () => useContext(SocketContext)
export const useSocketDispatch = () => useContext(SocketDispatchContext)