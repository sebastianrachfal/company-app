import cx from 'classnames';
import { RiAddLine, RiCloseLine } from 'react-icons/ri';

const FilterRule = () => (
	<div className='flex items-center space-x-2 text-sm'>
		<RiCloseLine className='flex-shrink-0 w-5 h-5' />
		<span className='text-gray-600'>Where</span>
		<select className='text-blue-800'>
			<option>Status</option>
			<option>Date</option>
		</select>
		<select className='w-16 text-blue-800'>
			<option>Is</option>
			<option>Is not</option>
		</select>
		<input
			placeholder='Type...'
			disabled
			className='p-1 border border-gray-200 rounded-md'
		/>
		<select className='w-16 text-blue-800'>
			<option>In</option>
			<option>Not in</option>
		</select>
		<input
			placeholder='Entity...'
			disabled
			className='p-1 border border-gray-200 rounded-md'
		/>
	</div>
);

export default function FilterModal({ filterOpen }: { filterOpen: boolean }) {
	return (
		<div
			className={cx(
				'absolute left-0 p-4 !ml-0 bg-white rounded-md shadow-md top-full border border-gray-200 transition duration-200 space-y-3 max-w-full overflow-scroll',
				{ 'opacity-0 pointer-events-none': !filterOpen }
			)}
		>
			<h3 className='text-sm text-gray-700'>
				Rows are filtered by the following conditions starting from the
				top.
			</h3>
			<FilterRule />
			<FilterRule />
			<FilterRule />
			<div className='flex items-center'>
				<button className='flex items-center mt-0.5 text-sm text-blue-800'>
					<RiAddLine className='w-5 h-5 mr-1' />
					Add filter
				</button>

				<select className='ml-3 text-sm text-blue-800'>
					<option>choose property</option>
					<option>property one</option>
					<option>property two</option>
				</select>
			</div>
		</div>
	);
}
