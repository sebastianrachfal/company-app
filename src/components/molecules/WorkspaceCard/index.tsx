/* eslint-disable jsx-a11y/anchor-is-valid */
import { memo } from 'react';
import WorkspaceItem from 'classes/WorkspaceItem';
import { Link } from 'react-router-dom';

interface IWorkspaceCard {
	item: WorkspaceItem;
}

export default memo(function WorkspaceCard({
	item: { name, Icon, imgSrc },
}: IWorkspaceCard) {
	return (
		<Link to={'/workspace/' + name.toLowerCase().replace(/ /g, '-')}>
			<div className='overflow-hidden bg-white rounded-xl w-[300px] shadow-sm cursor-pointer'>
				<div className='relative w-full h-20 overflow-hidden'>
					<img
						src={
							imgSrc.length > 0
								? imgSrc
								: `https://source.unsplash.com/random/300x200?random=${
										10000 * Math.random()
								  }`
						}
						className='absolute top-0 left-0 object-cover'
						alt='workspace-card'
					/>
				</div>
				<div className='relative p-3'>
					<div className='absolute w-16 p-2 bg-white rounded-md shadow-lg -top-4 left-4'>
						<Icon className='w-full h-full text-gray-700' />
					</div>
					<h4 className='ml-20 font-semibold truncate'>{name}</h4>
					<div className='flex mt-5 text-sm text-gray-500 whitespace-nowrap'>
						<span className='text-sm whitespace-nowrap'>
							<Icon className='inline-block mb-1' /> {name}
						</span>
						<span className='mx-1'>∙</span>
						<span className='text-sm whitespace-nowrap'>
							<Icon className='inline-block mb-1' /> 150 users
						</span>
					</div>
					<span className='text-xs text-gray-300'>
						Last update 2 days ago
					</span>
				</div>
			</div>
		</Link>
	);
});
