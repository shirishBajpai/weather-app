import { CITY } from "../reducers/reduxConstants.js";

export const setCity = (payload) => {
	return (dispatch) => {
		dispatch({ type: CITY, payload });
	};
};