import axios from "axios";
import {
  ERROR_CURRENT_WEATHER,
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
      const errorMessage = error?.response?.data?.message;

      console.log(errorMessage);
      dispatch({
        type: ERROR_CURRENT_WEATHER,
        payload: errorMessage,
      });
    } finally {
      dispatch({ type: FETCHING_CURRENT_WEATHER, payload: false });
    }
  };
};
