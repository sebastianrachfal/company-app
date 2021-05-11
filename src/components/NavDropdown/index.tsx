export default function NavDropdown() {
	return (
		<div className='ml-2 md:ml-4 flex justify-between w-full px-1 cursor-pointer max-w-[200px] pr-4'>
			<div className='flex items-center'>
				<img
					src='/assets/icons/house.svg'
					alt='location'
					className='w-5'
				/>
				<h2 className='ml-2 text-lg font-semibold text-gray-600'>
					Home
				</h2>
			</div>
			<img
				src='/assets/icons/arrow-down.svg'
				alt='dropdown'
				className='w-2'
			/>
		</div>
	);
}
