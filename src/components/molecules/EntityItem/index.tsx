import { memo } from 'react';
import { APIPublicationType } from 'types';
import { Link } from 'react-router-dom';
import { shallowEqual } from 'react-redux';

export default memo(function EntityItem({
	entity: { title, body, image },
}: {
	entity: APIPublicationType;
}) {
	return (
		<Link
			to={`entity/${encodeURIComponent(
				title.toLowerCase().split(' ').join('-')
			)}`}
		>
			<div className='flex h-[88px] p-1 rounded-md shadow-md cursor-pointer'>
				<div className='flex-shrink-0 w-20 h-20'>
					<img
						className='w-20 h-20 rounded-md'
						src={image}
						alt='entity'
					/>
				</div>
				<div className='flex-1 ml-2 truncate '>
					<h3 className='font-semibold text-blue-800 truncate whitespace-nowrap'>
						{title}
					</h3>
					<div className='h-8 max-w-full mt-6 text-xs text-gray-500 truncate whitespace-normal'>
						{body}
					</div>
				</div>
			</div>
		</Link>
	);
},
shallowEqual);
