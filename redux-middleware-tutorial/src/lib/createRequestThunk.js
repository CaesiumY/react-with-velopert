import { finishLoading, startLoading } from "../modules/loading";

const createRequestThunk = (type, request) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return (params) => async (dispatch) => {
    dispatch(startLoading(type));
    try {
      const response = await request(params);
      dispatch({
        type: SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({ type: FAILURE, payload: error, error: true });
      throw error;
    } finally {
      dispatch(finishLoading(type));
    }
  };
};

export default createRequestThunk;
