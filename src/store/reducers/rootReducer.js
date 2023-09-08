import { combineReducers } from 'redux';
import selectedCity from './selectedCity'
import forecast from './forecast'

const appReducer = combineReducers({
	selectedCity,
	forecast
});

export default appReducer;
