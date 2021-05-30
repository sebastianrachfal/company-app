import { APIUserType } from 'types';

export const getUserById = (users: APIUserType[], id: number) =>
	users?.find((user) => user.id === id);
