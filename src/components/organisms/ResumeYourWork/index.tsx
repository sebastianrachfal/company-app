import { useState } from 'react';
import { RootState } from 'redux/reducer';
import { useSelector } from 'react-redux';
import PublicationCard from 'components/molecules/PublicationCard';
import { APIPublicationType } from 'types';
import { getUserById } from 'helpers';
import { userSelector } from 'redux/slices/user';
import Pagination from 'components/molecules/Pagination';
import ListControls from 'components/molecules/ListControls';

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
			<ListControls
				name='Resume your work'
				{...{
					setSelectedPage,
					setSearchValue,
					setFilterType,
					filterType,
				}}
			/>
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
			<Pagination
				{...{ pageCount, selectedPage, setSelectedPage, bumpPage }}
			/>
		</div>
	);
}
