import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER:
			if (!action.payload.data) {
				console.log('City not found.');
				return state;
			}
			return [action.payload.data, ...state];
		
	}
	return state;
}