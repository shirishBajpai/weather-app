import { CITY } from "../reducers/reduxConstants";

export const setCity = (payload) => {
	return (dispatch) => {
		dispatch({ type: CITY, payload });
	};
};