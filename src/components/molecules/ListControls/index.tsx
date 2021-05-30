import Search from 'components/atoms/Search';
import { RiUserFill, RiUserFollowFill } from 'react-icons/ri';

export default function ListControls({
	setSelectedPage,
	setSearchValue,
	filterType,
	setFilterType,
	name,
}: {
	setSelectedPage: (val: number) => void;
	setSearchValue: (val: string) => void;
	setFilterType: (val: number) => void;
	filterType: number;
	name: string;
}) {
	return (
		<div className='flex justify-between'>
			<h2 className='text-xl font-semibold leading-8'>{name}</h2>
			<div className='flex'>
				<Search
					onChange={(e) => {
						setSelectedPage(0);
						setSearchValue(e.target.value.toLowerCase());
					}}
					placeholder='Filter by title'
					className='!text-left pl-2'
				/>
				<div className='flex items-center h-full ml-6 text-blue-800'>
					{filterType === 0 ? (
						<RiUserFollowFill className='w-6 h-6' />
					) : (
						<RiUserFill className='w-6 h-6' />
					)}
					<div className='ml-2'>
						<select
							className='bg-gray-100 cursor-pointer'
							onChange={(e) => {
								setSelectedPage(0);
								setFilterType(+e.target.value);
							}}
						>
							<option value='0'>Followed</option>
							<option value='1'>My</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	);
}
