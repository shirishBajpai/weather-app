import selectedCity from "../selectedCity";
import {
  CITY,
  ERROR_CURRENT_WEATHER,
  FETCHING_CURRENT_WEATHER,
  GET_CURRENT_WEATHER,
} from "../reduxConstants";

describe("selectedCity", () => {
  it("should return the initial state", () => {
    const initialState = {
      city: "Abbeville",
      lat: 50.099998,
      lon: 1.83333,
      fetchingCurrentWeather: false,
      temp: 0,
    };

    const state = selectedCity(undefined, {});
    expect(state).toEqual(initialState);
  });

  it("should handle CITY action", () => {
    const initialState = {
      city: "City Name",
      lat: 0,
      lon: 0,
      fetchingCurrentWeather: false,
      temp: 0,
    };

    const action = {
      type: CITY,
      payload: {
        city: "New City Name",
        lat: 123,
        lon: 456,
      },
    };

    const state = selectedCity(initialState, action);
    expect(state).toEqual({
      ...initialState,
      city: action.payload.city,
      lat: action.payload.lat,
      lon: action.payload.lon,
    });
  });

  it("should handle FETCHING_CURRENT_WEATHER action", () => {
    const initialState = {
      city: "City Name",
      lat: 0,
      lon: 0,
      fetchingCurrentWeather: false,
      temp: 0,
    };

    const action = {
      type: FETCHING_CURRENT_WEATHER,
      payload: true,
    };

    const state = selectedCity(initialState, action);
    expect(state).toEqual({
      ...initialState,
      fetchingCurrentWeather: action.payload,
    });
  });

  it("should handle GET_CURRENT_WEATHER action", () => {
    const initialState = {
      city: "City Name",
      lat: 0,
      lon: 0,
      fetchingCurrentWeather: true,
      temp: 0,
    };

    const action = {
      type: GET_CURRENT_WEATHER,
      payload: {
        main: { temp: 25 },
        weather: [{ id: 800 }],
      },
    };

    const state = selectedCity(initialState, action);
    expect(state).toEqual({
      ...initialState,
      temp: action.payload.main.temp,
      icon: action.payload.weather[0].id,
      fetchingCurrentWeather: false,
    });
  });

  it("should handle ERROR_CURRENT_WEATHER action", () => {
    const initialState = {
      city: "City Name",
      lat: 0,
      lon: 0,
      fetchingCurrentWeather: false,
      temp: 0,
    };

    const action = {
      type: ERROR_CURRENT_WEATHER,
      payload: "Error message",
    };

    const state = selectedCity(initialState, action);
    expect(state).toEqual({
      ...initialState,
      error: action.payload,
    });
  });

  it("should return the current state for unknown action type", () => {
    const initialState = {
      city: "City Name",
      lat: 0,
      lon: 0,
      fetchingCurrentWeather: false,
      temp: 0,
    };

    const action = {
      type: "UNKNOWN_ACTION",
      payload: "Some data",
    };

    const state = selectedCity(initialState, action);
    expect(state).toEqual(initialState);
  });
});
