import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_DATA } from 'constants/index';
import { AppDispatch, RootState } from 'redux/store';
import { APIUserType } from 'types';

export const initialState: any = {
	isLoading: false,
	user: {},
	userData: {
		...USER_DATA,
	},
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
		setUserData: (
			state,
			{
				payload,
			}: PayloadAction<{ key: string; ids?: number[]; value: string }>
		) => {
			if (!payload.ids) state.userData[payload.key] = payload.value;
			else if (payload.ids.length === 1)
				state.userData[payload.key][payload.ids[0]] = payload.value;
			else
				state.userData[payload.key][payload.ids[0]][payload.ids[1]] =
					payload.value;
		},
	},
});

export const setRandomUser =
	(users: APIUserType[]) => async (dispatch: AppDispatch) => {
		const user = users[Math.round(Math.random() * (users.length - 1))];
		dispatch(setUser(user));
		dispatch(setUserData({ key: 'name', value: user?.name }));
		dispatch(
			setUserData({
				key: 'email',
				value: `${user?.name
					?.toLowerCase()
					.replace('.', '')
					.split(' ')
					.join('-')}@example.com`,
			})
		);
	};

export const fetchTags = () => async (dispatch: AppDispatch) => {};

export const { setLoading, setUser, setUserData } = userSlice.actions;

export default userSlice.reducer;

export const userSelector = (state: RootState) => state.user;

export const userDataSelector =
	(key: string, ids?: number[]) => (state: RootState) =>
		ids
			? ids.length === 1
				? state.user.userData[key][ids[0]]
				: state.user.userData[key][ids[0]][ids[1]]
			: state.user.userData[key];
