import { SELECT_ROOM } from "../actions"

const initialState = {
  room: {},
}

const roomReducer = (state = initialState, action) => {
  console.info(action.type)
  switch (action.type) {
    case SELECT_ROOM:
      console.info("roomReducer")
      return { ...state, room: action.payload }
    default:
      return state
  }
}

export default roomReducer
