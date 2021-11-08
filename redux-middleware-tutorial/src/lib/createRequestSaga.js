import { put, call } from "@redux-saga/core/effects";
import { finishLoading, startLoading } from "../modules/loading";

const createRequestSaga = (type, request) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action) {
    yield put(startLoading(type));

    try {
      const response = yield call(request, action.payload);

      yield put({
        type: SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      yield put({
        type: FAILURE,
        payload: error,
        error: true,
      });
    } finally {
      yield put(finishLoading(type));
    }
  };
};

export default createRequestSaga;
