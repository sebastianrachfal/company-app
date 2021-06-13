import { useState, useEffect } from 'react';
import { RootState } from 'redux/reducer';
import { useSelector } from 'react-redux';
import PublicationCard from 'components/molecules/PublicationCard';
import { APIPublicationType } from 'types';
import { getUserById } from 'helpers';
import { userSelector } from 'redux/slices/user';
import { BiSelectMultiple } from 'react-icons/bi';
import { UPDATES_TAGS } from 'constants/index';
import UpdateTag from 'components/atoms/UpdateTag';
import UTItem from 'classes/UpdatesTagItem';
import Pagination from 'components/molecules/Pagination';
import ListControls from 'components/molecules/ListControls';

export type PublicationWithType = APIPublicationType & { tag: UTItem };

export default function LatestUpdates() {
	const [filterType, setFilterType] = useState(0);
	const [selectedTags, setSelectedTags] = useState<string[]>([]);
	const [mappedPublications, setMappedPublications] = useState<
		PublicationWithType[]
	>([]);
	const [selectedPage, setSelectedPage] = useState(0);
	const [searchValue, setSearchValue] = useState('');
	const { publications, users } = useSelector(
		(state: RootState) => state.apiData
	);

	const { user } = useSelector(userSelector);

	const filteredPublications = mappedPublications.filter(
		({ title, userId, tag }: PublicationWithType) =>
			(filterType !== 1 || userId === user.id) &&
			(searchValue.length > 0
				? title.toLowerCase().includes(searchValue)
				: true) &&
			(selectedTags.length > 0
				? selectedTags.includes(tag.name) &&
				  (searchValue.length > 0
						? title.toLowerCase().includes(searchValue)
						: true)
				: true)
	);

	useEffect(() => {
		setMappedPublications(
			publications.map((publication: APIPublicationType) => ({
				...publication,
				tag: UPDATES_TAGS[
					Math.round(Math.random() * (UPDATES_TAGS.length - 1))
				],
			}))
		);
	}, [publications]);

	const pageCount = Math.ceil(filteredPublications.length / 10);
	const bumpPage = (val: number) =>
		setSelectedPage(
			Math.max(Math.min(selectedPage + val, pageCount - 1), 0)
		);

	return (
		<div className='mt-4'>
			<ListControls
				name='Latest updates'
				{...{
					setSelectedPage,
					setSearchValue,
					setFilterType,
					filterType,
				}}
			/>

			<div className='flex space-x-1.5 my-2'>
				<UpdateTag
					tag={new UTItem('All', BiSelectMultiple, 'bg-white')}
					onClick={() => {
						setSelectedTags([]);
					}}
					active={
						selectedTags.length === 0 ||
						selectedTags.length === UPDATES_TAGS.length
					}
				/>
				{UPDATES_TAGS.map((tag: UTItem) => (
					<UpdateTag
						tag={tag}
						onClick={() => {
							setSelectedTags(
								selectedTags.includes(tag.name)
									? selectedTags.filter(
											(item: string) => item !== tag.name
									  )
									: [...selectedTags, tag.name]
							);
						}}
						active={selectedTags.includes(tag.name)}
					/>
				))}
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
							tag,
						}: PublicationWithType) => (
							<PublicationCard
								key={'pub-' + id}
								user={getUserById(users, userId)}
								content={body}
								title={title}
								type={type}
								tag={tag}
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
