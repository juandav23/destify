import { all } from "redux-saga/effects"
import counterSaga from "./counterSaga"
import roomSaga from "./roomSaga"

function* rootSaga() {
  yield all([roomSaga(), counterSaga()])
}

export default rootSaga
