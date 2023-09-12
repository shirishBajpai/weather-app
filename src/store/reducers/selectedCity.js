import {
  CITY,
  ERROR_CURRENT_WEATHER,
  FETCHING_CURRENT_WEATHER,
  GET_CURRENT_WEATHER,
} from "./reduxConstants";
import cities from "../../data/French-cities.json";

const {nm,lat,lon}= cities[0]

const initialState = {
  city: nm,
  lat: lat,
  lon: lon,
  fetchingCurrentWeather: false,
  temp: 0,
};

const selectedCity = (state = initialState, action) => {
  switch (action.type) {
    case CITY:
      return {
        ...state,
        city: action.payload.city,
        lat: action.payload.lat,
        lon: action.payload.lon,
      };
    case FETCHING_CURRENT_WEATHER:
      return {
        ...state,
        fetchingCurrentWeather: action.payload,
      };

    case GET_CURRENT_WEATHER:
      return {
        ...state,
        temp: action.payload.main.temp,
        icon: action.payload.weather[0].id,
        fetchingCurrentWeather: false,
      };

    case ERROR_CURRENT_WEATHER:
      return {
        ...state,
        error: action.payload
      }

    default:
      return state;
  }
};

export default selectedCity;
