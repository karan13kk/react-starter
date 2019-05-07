import { combineReducers } from 'redux';

import Demo from './reducer_demo';

const rootReducer = combineReducers({
	demo: Demo
});

export default rootReducer;