import { RiBuildingFill, RiCalendar2Fill, RiCodepenFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export enum MatterCardType {
	Entities,
	Ownership,
	Calendar,
}

export default function MatterCard({ type }: { type: MatterCardType }) {
	const Icon = [RiBuildingFill, RiCodepenFill, RiCalendar2Fill][type];
	const heading = ['Explore your', 'Structure your', 'Define the'][type];
	const name = ['entities', 'ownership', 'calendar'][type];

	const content = (
		<div className='relative flex flex-col p-4 bg-white shadow-md rounded-xl'>
			<Icon className='absolute top-0 right-0 w-6/12 h-full text-blue-800 opacity-[0.15]' />
			<Icon className='w-10 h-10 text-blue-800' />
			<h2 className='my-2 text-xl text-gray-700'>
				{heading}
				<span className='ml-1 font-bold text-gray-900'>{name}</span>
			</h2>
			<p className='text-sm'>
				Mauris at feugiat nisl. Aenean ut sem sit amet odio ullamcorper
				facilisis eu ut diam.
			</p>
		</div>
	);

	return type === MatterCardType.Entities ? (
		<Link to='/entities' className='cursor-pointer'>
			{content}
		</Link>
	) : (
		content
	);
}
