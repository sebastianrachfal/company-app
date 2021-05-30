/* eslint-disable jsx-a11y/anchor-is-valid */
import { memo } from 'react';
import cx from 'classnames';
import WorkspaceItem from 'classes/WorkspaceItem';
import { Link } from 'react-router-dom';
import Spacer from 'components/atoms/Spacer';
import WorkspaceInfo from 'components/atoms/WorkspaceInfo';
import { RiSettings2Fill } from 'react-icons/ri';

interface IWorkspaceCard {
	item: WorkspaceItem;
	onWorkspace?: boolean;
}

export default memo(function WorkspaceCard({
	item: { name, Icon, imgSrc },
	onWorkspace,
}: IWorkspaceCard) {
	const content = (
		<div
			className={cx(
				'w-full overflow-hidden bg-white shadow-md rounded-xl',
				{ 'cursor-pointer': !onWorkspace }
			)}
		>
			<div
				className={cx('relative w-full overflow-hidden', {
					'h-28': !onWorkspace,
					'h-36': onWorkspace,
				})}
			>
				<img
					src={
						!!imgSrc && imgSrc.length > 0
							? imgSrc
							: `https://source.unsplash.com/random/300x200?random=${
									10000 * Math.random()
							  }`
					}
					className='object-cover w-full h-full'
					alt='workspace-card'
				/>
			</div>
			<div className='relative p-3'>
				{onWorkspace && (
					<RiSettings2Fill className='absolute text-gray-700 right-4 top-4' />
				)}
				<div className={cx({ 'flex items-center': onWorkspace })}>
					<div
						className={cx(
							'w-16 p-2 bg-white rounded-md shadow-lg -top-4 left-4 flex-shrink-0',
							{ absolute: !onWorkspace, 'w-20 m-2': onWorkspace }
						)}
					>
						<Icon className='w-full h-full text-gray-700' />
					</div>
					<div className={cx({ 'ml-4': onWorkspace })}>
						<h4
							className={cx('font-semibold truncate', {
								'ml-20': !onWorkspace,
								'text-xl': onWorkspace,
							})}
						>
							{name}
						</h4>
						{onWorkspace && (
							<p className='py-2 mr-10 text-sm text-gray-600'>
								Praesent ac ultrices mauris. Curabitur efficitur
								dapibus euismod. Donec nec velit eget urna
								molestie consequat et ac ipsum. Mauris vitae
								metus at sapien mattis interdum. Aenean eu
								vehicula turpis. Lorem ipsum dolor sit amet,
								consectetur adipiscing elit. In rutrum nunc ac
								neque sodales dignissim. Maecenas tempor neque
								metus, in pharetra urna tempor a. Aliquam
								finibus tincidunt urna. Etiam porttitor ac felis
								vitae gravida. Maecenas sodales nunc id nulla
								dictum varius. Aliquam erat volutpat.
							</p>
						)}
					</div>
				</div>
				{!onWorkspace && (
					<>
						<div className='flex mt-5 text-sm text-gray-500 whitespace-nowrap'>
							<WorkspaceInfo name={name} Icon={Icon} />
							<Spacer />
							<span className='text-sm whitespace-nowrap'>
								<Icon className='inline-block mb-1' /> 150 users
							</span>
						</div>
						<span className='text-xs text-gray-300'>
							Last update 2 days ago
						</span>
					</>
				)}
			</div>
		</div>
	);
	return onWorkspace ? (
		content
	) : (
		<Link to={'/workspace/' + name.toLowerCase().replace(/ /g, '-')}>
			{content}
		</Link>
	);
});
