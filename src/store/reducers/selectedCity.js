import { CITY } from './reduxConstants';

const initialState = {
	city: ''
};

const selectedCity = (state = initialState, action) => {
	switch (action.type) {
		case CITY:
			return { city: action.payload};

		default:
			return state;
	}
};

export default selectedCity;
