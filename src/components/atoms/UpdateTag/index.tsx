import cx from 'classnames';
import UTItem from 'classes/UpdatesTagItem';
import { RiCheckLine } from 'react-icons/ri';
import { MouseEventHandler } from 'react';

export default function UpdateTag({
	tag,
	active,
	onClick,
}: {
	tag: UTItem;
	active?: boolean;
	onClick?: MouseEventHandler<HTMLDivElement>;
}) {
	return (
		<div
			className={cx(
				'flex items-center p-1 px-1.5 rounded-md cursor-pointer',
				tag.color
			)}
			onClick={onClick}
		>
			<tag.ItemIcon className='w-4 h-4 text-gray-700' />
			<span className='ml-2 text-sm text-gray-700 select-none'>
				{tag.name}
			</span>
			<RiCheckLine
				className={cx('transition-all duration-100 w-0', {
					'!w-4 ml-1': active,
				})}
			/>
		</div>
	);
}
