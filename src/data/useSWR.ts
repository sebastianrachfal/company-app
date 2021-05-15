import useSWR from 'swr';
import dataPath from './dataPath';

const fetcher = (url: string, ...args: any) =>
	fetch(url, ...args).then((res) => res.json());

const Hook = (endpoint: string) =>
	useSWR(
		endpoint.includes(dataPath) ? endpoint : `${dataPath}${endpoint}`,
		fetcher
	);

export default Hook;
