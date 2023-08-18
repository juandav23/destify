import { takeEvery, put } from "redux-saga/effects"

function* selectRoomAsync() {
  console.info("selectRoomAsync")
  yield put({ type: "SELECT_ROOM" })
}

function* roomSaga() {
  yield takeEvery("SELECT_ROOM_ASYNC", selectRoomAsync)
}

export default roomSaga
