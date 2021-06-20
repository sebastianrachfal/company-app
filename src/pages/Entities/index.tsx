import { useState } from 'react';
import { ViewType, SortDir } from 'types';
import cx from 'classnames';
import EntitiesControl from 'components/organisms/EntitiesControl';
import EntitiesView from 'components/organisms/EntitiesView';

export default function Entities() {
	const [sortDir, setSortDir] = useState(SortDir.AZ);
	const [viewType, setViewType] = useState(ViewType.Grid);
	const [isFullscreen, setIsFullscreen] = useState(false);
	const [hasShared, setHasShared] = useState(false);
	const [filterType, setFilterType] = useState(0);
	const [searchValue, setSearchValue] = useState('');

	return (
		<div
			className={cx(
				'flex flex-col w-full p-5 bg-white rounded-lg shadow-md',
				{ 'fixed left-0 top-0 z-50': isFullscreen }
			)}
		>
			<EntitiesControl
				{...{
					viewType,
					setViewType,
					sortDir,
					setSortDir,
					isFullscreen,
					setIsFullscreen,
					hasShared,
					setHasShared,
					setSearchValue,
					filterType,
					setFilterType,
				}}
			/>
			<EntitiesView
				{...{
					viewType,
					sortDir,
					searchValue,
					filterType,
				}}
			/>
		</div>
	);
}
