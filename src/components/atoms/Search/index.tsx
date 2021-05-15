import Icon from 'components/atoms/Icon';

export default function Search() {
	return (
		<div className='relative w-full h-full overflow-hidden border border-gray-300 rounded-lg focus-within:border-gray-500'>
			<input
				placeholder='Search'
				className='w-full h-full text-center padding-2 focus:outline-none'
			/>
			<Icon
				id='search'
				className='absolute transform -translate-y-1/2 pointer-events-none right-1 top-1/2'
			/>
		</div>
	);
}
