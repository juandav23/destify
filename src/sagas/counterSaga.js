import { takeEvery, put } from "redux-saga/effects"

function* incrementAsync() {
  yield put({ type: "INCREMENT" })
}

function* decrementAsync() {
  yield put({ type: "DECREMENT" })
}

function* counterSaga() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync)
  yield takeEvery("DECREMENT_ASYNC", decrementAsync)
}

export default counterSaga
