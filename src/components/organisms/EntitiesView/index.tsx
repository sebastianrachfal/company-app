import EntityItem from 'components/molecules/EntityItem';
import { useSelector } from 'react-redux';
import cx from 'classnames';
import { userSelector } from 'redux/slices/user';
import { RootState } from 'redux/store';
import { APIPublicationType, SortDir, ViewType } from 'types';

export default function EntitiesView({
	viewType,
	sortDir,
	searchValue,
	filterType,
}: {
	viewType: ViewType;
	sortDir: SortDir;
	searchValue: string;
	filterType: number;
}) {
	const {
		user: { id },
	} = useSelector(userSelector);
	const { publications, isLoading } = useSelector(
		(state: RootState) => state.apiData
	);
	if (isLoading) return null;
	const filteredPublications = publications
		.filter((publication: APIPublicationType) =>
			filterType === 1 ? publication.userId === id : true
		)
		.slice(0, 20)
		.filter((publication: APIPublicationType) =>
			publication.title.toLowerCase().includes(searchValue)
		);

	return (
		<div
			className={cx(
				'grid grid-flow-row grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-2 -mx-1',
				{
					'!grid-cols-1': viewType === ViewType.List,
				}
			)}
		>
			{filteredPublications
				.sort((a: APIPublicationType, b: APIPublicationType) => {
					const dir = sortDir === SortDir.AZ ? [-1, 1] : [1, -1];

					if (a.title > b.title) return dir[0];
					if (a.title < b.title) return dir[1];

					return 0;
				})
				.map((publication: APIPublicationType, index: number) => (
					<EntityItem
						key={`entity-${publication.id}`}
						entity={publication}
					/>
				))}
		</div>
	);
}
