import axios from "axios";
import {
  FETCHING_CURRENT_WEATHER,
  GET_CURRENT_WEATHER,
} from "../reducers/reduxConstants";

export const currentCityWeather = (lat, lon) => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCHING_CURRENT_WEATHER, payload: true });
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=84427374c5a076bd820942a4e89ef905`
      );

      dispatch({ type: GET_CURRENT_WEATHER, payload: data });
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
