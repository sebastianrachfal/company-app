import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from 'redux/store';
import { APIUserType } from 'types';

export const initialState: any = {
	isLoading: false,
	user: {},
};

export const userSlice = createSlice({
	name: 'articles',
	initialState,
	reducers: {
		setLoading: (state, { payload }: PayloadAction<boolean>) => {
			state.isLoading = payload;
		},
		setUser: (state, { payload }: PayloadAction<APIUserType>) => {
			state.user = payload;
		},
	},
});

export const setRandomUser =
	(users: APIUserType[]) => async (dispatch: AppDispatch) => {
		dispatch(
			setUser(users[Math.round(Math.random() * (users.length - 1))])
		);
	};

export const fetchTags = () => async (dispatch: AppDispatch) => {};

export const { setLoading, setUser } = userSlice.actions;
export default userSlice.reducer;
export const userSelector = (state: RootState) => state.user;
