import axios from "axios";
import { FETCHING_FORECAST, GET_FORECAST } from "../reducers/reduxConstants";

export const forecast= (lat,lon) => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCHING_FORECAST, payload: true });
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=d9e58224546d4281a4de593e670b258c&units=metric`
      );
      dispatch({ type: GET_FORECAST, payload: data });
    } catch (error) {
      // const errorMessage = error?.response?.data?.error?.developer_message;
      // dispatch({
      // 	type: GET_PAG_TIERS_ERROR,
      // 	payload: errorMessage ? errorMessage : FALLBACK_ERROR_MESSAGE
      // });
    } finally {
      // dispatch({ type: FETCHING_PAG_TIERS, payload: false });
    }
  };
};
