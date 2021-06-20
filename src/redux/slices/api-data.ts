import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from 'redux/store';
import { fetcher } from 'data/useSWR';
import { APIUserType, APIPublicationType } from 'types';
import { USER_IMAGES } from 'constants/index';
import { setRandomUser } from 'redux/slices/user';

export const initialState: any = {
	isLoading: false,
	publications: [],
	users: [],
};

export const publicationsSlice = createSlice({
	name: 'articles',
	initialState,
	reducers: {
		setLoading: (state, { payload }: PayloadAction<boolean>) => {
			state.isLoading = payload;
		},
		setUsers: (state, { payload }: PayloadAction<APIUserType[]>) => {
			state.users = payload;
		},
		setPublications: (
			state,
			{ payload }: PayloadAction<APIPublicationType[]>
		) => {
			state.publications = payload;
		},
	},
});

export const fetchSiteData = () => async (dispatch: AppDispatch) => {
	dispatch(setLoading(true));

	const pubs = await fetcher('https://jsonplaceholder.typicode.com/posts');

	dispatch(
		setPublications(
			pubs.map((pub: APIPublicationType, index: number) => ({
				...pub,
				title: pub.title[0].toUpperCase() + pub.title.slice(1),
				type: Math.round(Math.random() * 4),
				image: `https://picsum.photos/seed/${pub.id}/80/80`,
			}))
		)
	);

	const res = await fetcher('https://jsonplaceholder.typicode.com/users');
	const users = res.map(({ id, name }: APIUserType) => ({
		id,
		name,
		image: USER_IMAGES[id - 1],
	}));
	dispatch(setUsers(users));
	dispatch(setRandomUser(users));
	dispatch(setLoading(false));
};

export const { setLoading, setUsers, setPublications } =
	publicationsSlice.actions;

export default publicationsSlice.reducer;
export const userSelector = (state: RootState) => state.user;
