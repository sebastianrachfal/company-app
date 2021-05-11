import Icon from 'components/Icon';

export default function Search() {
	return (
		<div className='w-full h-full rounded-lg border-gray-300 border-[1px] overflow-hidden relative focus-within:border-gray-500'>
			<input
				placeholder='Search'
				className='w-full h-full padding-2 text-center focus:outline-none'
			/>
			<Icon
				id='search'
				className='absolute right-1 top-1/2 transform -translate-y-1/2 pointer-events-none'
			/>
		</div>
	);
}
