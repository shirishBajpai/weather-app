import forecast from '../forecast'; // Import your reducer
import {
  FETCHING_FORECAST,
  GET_FORECAST,
} from '../reduxConstants';

describe('forecast', () => {
  it('should return the initial state', () => {
    const initialState = {
      fetchingForecast: false,
      forecastList: [],
    };

    const state = forecast(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should handle FETCHING_FORECAST action', () => {
    const initialState = {
      fetchingForecast: false,
      forecastList: [],
    };

    const action = {
      type: FETCHING_FORECAST,
      payload: true,
    };

    const state = forecast(initialState, action);
    expect(state).toEqual({
      ...initialState,
      fetchingForecast: true,
    });
  });

  it('should handle GET_FORECAST action', () => {
    const initialState = {
      fetchingForecast: true,
      forecastList: [],
    };

    const action = {
      type: GET_FORECAST,
      payload: {
        list: [
          // Sample forecast data
          {
            dt: 1,
            main: { temp_max: 20, temp_min: 10 },
            dt_txt: '2023-09-07 12:00:00',
            weather: [{ id: 800 }],
          },
          // Add more forecast data as needed
        ],
      },
    };

    const state = forecast(initialState, action);
    expect(state).toEqual({
      ...initialState,
      forecastList: action.payload.list,
      fetchingForecast: false,
    });
  });

  it('should return the current state for unknown action type', () => {
    const initialState = {
      fetchingForecast: false,
      forecastList: [],
    };

    const action = {
      type: 'UNKNOWN_ACTION',
      payload: 'Some data',
    };

    const state = forecast(initialState, action);
    expect(state).toEqual(initialState);
  });
});
