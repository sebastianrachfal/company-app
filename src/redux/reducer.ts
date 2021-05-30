import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './slices/user';
import apiDataReducer from './slices/api-data';

const rootReducer = combineReducers({
	user: userReducer,
	apiData: apiDataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
