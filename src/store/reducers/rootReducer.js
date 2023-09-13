import { combineReducers } from 'redux';
import selectedCity from './selectedCity.js'
import forecast from './forecast.js'

const appReducer = combineReducers({
	selectedCity,
	forecast
});

export default appReducer;
