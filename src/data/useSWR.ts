import useSWR from 'swr';
import dataPath from './dataPath';

export const fetcher = (url: string, ...args: any) =>
	fetch(url, ...args).then((res) => res.json());

const Hook = (endpoint: string) =>
	useSWR(
		endpoint.includes(dataPath) || endpoint.includes('http')
			? endpoint
			: `${dataPath}${endpoint}`,
		fetcher
	);

export default Hook;
