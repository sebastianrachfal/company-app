import cx from 'classnames';
import {
	RiArrowDownLine,
	RiFileListLine,
	RiLayoutGridFill,
	RiMoreFill,
	RiSettings3Line,
	RiFilterLine,
	RiFilterFill,
	RiFullscreenLine,
	RiFullscreenExitLine,
	RiShareLine,
	RiCheckLine,
	RiUserFill,
	RiUserFollowFill,
} from 'react-icons/ri';
import { BiSelectMultiple } from 'react-icons/bi';

import Search from 'components/atoms/Search';
import { ViewType, SortDir } from 'types';
import { useState } from 'react';

const Spacer = () => <div className='h-5 w-[1px] bg-gray-300 rounded-md'></div>;

const Switcher = ({
	viewType,
	setViewType,
}: {
	viewType: ViewType;
	setViewType: (vt: ViewType) => void;
}) => {
	return (
		<div className='flex ml-auto overflow-hidden text-blue-800 border border-gray-200 rounded-md'>
			<button
				onClick={() => setViewType(ViewType.Grid)}
				className={cx(
					'flex items-center p-1.5 px-2 overflow-hidden text-sm focus:outline-none outline-none w-[70px] transition-all duration-200',
					{
						'!w-[30px]': viewType !== ViewType.Grid,
						'bg-blue-200': viewType === ViewType.Grid,
					}
				)}
			>
				<RiLayoutGridFill className='flex-shrink-0 w-4 h-4 mr-2' /> Grid
			</button>
			<button
				onClick={() => setViewType(ViewType.List)}
				className={cx(
					'flex items-center p-1.5 px-2 overflow-hidden text-sm focus:outline-none outline-none w-[70px] transition-all duration-200',
					{
						'!w-[30px]': viewType !== ViewType.List,
						'bg-blue-200': viewType === ViewType.List,
					}
				)}
			>
				<RiFileListLine className='flex-shrink-0 w-4 h-4 mr-2' />
				List
			</button>
		</div>
	);
};
export default function EntitiesControl({
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
}: any) {
	const [filterOpen, setFilterOpen] = useState(false);
	return (
		<>
			<div className='flex items-center'>
				<h2 className='text-xl'>Entities</h2>
				<RiSettings3Line className='w-5 h-5 ml-2 text-gray-700' />
				<Switcher {...{ viewType, setViewType }} />
			</div>
			<div className='flex flex-wrap items-center w-full space-x-3 space-y-2'>
				<button className='flex items-center p-1 px-2 mt-2 text-blue-800 bg-blue-200 rounded-md'>
					<BiSelectMultiple className='w-5 h-5 mr-2' />
					All
				</button>

				<RiMoreFill className='flex-shrink-0 w-6 h-6 text-gray-800' />

				<Spacer />

				<button
					className='flex items-center text-gray-600 cursor-pointer focus:outline-none'
					onClick={() => setSortDir(+!sortDir as SortDir)}
				>
					<RiArrowDownLine
						className={cx(
							'mr-1.5 w-5 h-5 transform transition duration-200',
							{ 'rotate-180': sortDir === SortDir.ZA }
						)}
					/>
					Sort
				</button>

				<button
					className='relative flex items-center text-gray-600 cursor-pointer focus:outline-none'
					onClick={() => setFilterOpen(!filterOpen)}
				>
					<RiFilterLine
						className={cx(
							'w-5 h-5 mr-1.5 transition duration-200 opacity-100',
							{
								'opacity-0': filterOpen,
							}
						)}
					/>
					<RiFilterFill
						className={cx(
							'w-5 h-5 absolute left-0 transition duration-100 opacity-0',
							{
								'!opacity-100': filterOpen,
							}
						)}
					/>
					Filter
				</button>

				<Spacer />

				<button
					className='flex items-center p-1 text-gray-600 focus:outline-none'
					onClick={() => setIsFullscreen(!isFullscreen)}
				>
					{isFullscreen ? (
						<>
							<RiFullscreenExitLine className='mr-2' />
							<span className='text-sm'>Exit fullscreen</span>
						</>
					) : (
						<RiFullscreenLine />
					)}
				</button>

				<Spacer />
				<button
					className={cx(
						'flex items-center p-1 text-gray-600 focus:outline-none transition duration-100',
						{ '!text-green-600': hasShared }
					)}
					onClick={() => {
						navigator.clipboard
							.writeText(window.location.href)
							.then(
								function () {
									setHasShared(true);
								},
								function (err) {
									console.error('Could not copy text: ', err);
								}
							);
					}}
				>
					<RiShareLine className='mr-1.5' />
					Share
					<RiCheckLine
						className={cx(
							'ml-1.5 transform scale-x-0 transition druation-100',
							{ 'scale-x-100': hasShared }
						)}
					/>
				</button>

				<div className='flex !ml-auto items-center'>
					<Search
						onChange={(e) => {
							setSearchValue(e.target.value.toLowerCase());
						}}
						placeholder='Search...'
						className='!text-left pl-2 py-1 min-w-[120px]'
					/>
					<div className='flex items-center h-full ml-6 text-blue-800'>
						{filterType === 0 ? (
							<RiUserFollowFill className='w-6 h-6' />
						) : (
							<RiUserFill className='w-6 h-6' />
						)}
						<div className='ml-2'>
							<select
								className='bg-white cursor-pointer'
								onChange={(e) => {
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
		</>
	);
}
