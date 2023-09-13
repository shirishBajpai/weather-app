import axios from "axios";
import { ERROR_FORECAST, FETCHING_FORECAST, GET_FORECAST } from "../reducers/reduxConstants.js";

export const forecast= (lat,lon) => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCHING_FORECAST, payload: true });
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=d9e58224546d4281a4de593e670b258c&units=metric`
      );
      dispatch({ type: GET_FORECAST, payload: data });
    } catch (error) {
      const errorMessage = error?.response?.data?.message;
      dispatch({
      	type: ERROR_FORECAST,
      	payload: errorMessage
      });
    } finally {
      dispatch({ type: FETCHING_FORECAST, payload: false });
    }
  };
};
