import IParams from './IParams';

export default function TypedWorkspace({ type }: IParams) {
	return <div className='flex w-full'>{type}</div>;
}
