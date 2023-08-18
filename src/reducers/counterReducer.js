import { INCREMENT, DECREMENT } from "../actions"

const initialState = {
  count: 0,
}

const counterReducer = (state = initialState, action) => {
  console.info(action.type)
  console.info(state.count)
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 }
    case DECREMENT:
      return { ...state, count: state.count - 1 }
    default:
      return state
  }
}

export default counterReducer
