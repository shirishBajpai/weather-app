import {
    FETCHING_FORECAST,
    GET_FORECAST,
  } from "./reduxConstants";
  
  const initialState = {
    fetchingForecast: false,
    forecastList: []
  };
  
  const forecast = (state = initialState, action) => {
   
    switch (action.type) {
      case FETCHING_FORECAST:
        return {
          ...state,
          fetchingForecast: action.payload,
        };
  
      case GET_FORECAST:
        return {
          ...state,
          forecastList: action.payload.list,
          fetchingForecast: false
        };
  
      default:
        return state;
    }
  };
  
  export default forecast;
  