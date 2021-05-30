import { useState } from 'react';
import cx from 'classnames';
import Search from 'components/atoms/Search';
import { RiUserFill, RiUserFollowFill } from 'react-icons/ri';
import { RootState } from 'redux/reducer';
import { useSelector } from 'react-redux';
import PublicationCard from 'components/molecules/PublicationCard';
import { APIPublicationType } from 'types';
import { getUserById } from 'helpers';
import { userSelector } from 'redux/slices/user';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import PaginationButton from 'components/atoms/PaginationButton';

export default function ResumeYourWork() {
	const [filterType, setFilterType] = useState(0);
	const [selectedPage, setSelectedPage] = useState(0);
	const [searchValue, setSearchValue] = useState('');
	const { publications, users, isLoading } = useSelector(
		(state: RootState) => state.apiData
	);

	const { user } = useSelector(userSelector);

	const filteredPublications = publications.filter(
		({ title, userId }: APIPublicationType) =>
			(filterType !== 1 || userId === user.id) &&
			(searchValue.length > 0
				? title.toLowerCase().includes(searchValue)
				: true)
	);

	const pageCount = Math.ceil(filteredPublications.length / 10);
	const bumpPage = (val: number) =>
		setSelectedPage(
			Math.max(Math.min(selectedPage + val, pageCount - 1), 0)
		);

	return (
		<div className='mt-4'>
			<div className='flex justify-between'>
				<h2 className='text-xl font-semibold leading-8'>
					Resume your work
				</h2>
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
			<div className='mt-4'>
				{filteredPublications
					.slice(selectedPage * 10, (selectedPage + 1) * 10)
					?.map(
						({
							title,
							userId,
							type,
							body,
							id,
						}: APIPublicationType) => (
							<PublicationCard
								key={'pub-' + id}
								user={getUserById(users, userId)}
								content={body}
								title={title}
								type={type}
							/>
						)
					)}
			</div>
			<div className='flex justify-center w-full my-2 text-blue-800'>
				<div className='flex items-center space-x-1'>
					<PaginationButton
						className='hover:bg-blue-100'
						onClick={() => bumpPage(-1)}
					>
						<BiLeftArrow />
					</PaginationButton>
					<div>
						{new Array(pageCount).fill(0).map((_, index) => (
							<PaginationButton
								key={'page-' + index}
								className={cx({
									'bg-blue-200': index === selectedPage,
									'hover:bg-blue-100': index !== selectedPage,
								})}
								onClick={() => setSelectedPage(index)}
							>
								{index + 1}
							</PaginationButton>
						))}
					</div>
					<PaginationButton
						className='hover:bg-blue-100'
						onClick={() => bumpPage(1)}
					>
						<BiRightArrow />
					</PaginationButton>
				</div>
			</div>
		</div>
	);
}
