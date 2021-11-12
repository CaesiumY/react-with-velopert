import { combineReducers } from "redux";
import { all } from "@redux-saga/core/effects";
import users, { usersSaga } from "./users";

export function* rootSaga() {
  yield all([usersSaga()]);
}

const rootReducer = combineReducers({ users });

export default rootReducer;
