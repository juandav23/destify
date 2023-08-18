import { combineReducers } from "redux"
import counterReducer from "./counterReducer"
import roomReducer from "./roomReducer"

const rootReducer = combineReducers({
  counter: counterReducer,
  room: roomReducer,
})

export default rootReducer
