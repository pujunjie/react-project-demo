import { takeEvery, put, all } from "redux-saga/effects";
import { SAGA_TEST } from "../type/type";
import { getTestAction } from "../action/action";

function* getTest() {
  console.log("saga");
  yield put(getTestAction());
}

function* allSaga() {
  yield all([yield takeEvery(SAGA_TEST, getTest)]);
}

export default allSaga;
