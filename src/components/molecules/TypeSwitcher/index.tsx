import cx from 'classnames';
import { RiFileListLine, RiLayoutGridFill } from 'react-icons/ri';
import { ViewType } from 'types';

export default function TypeSwitcher({
	viewType,
	setViewType,
}: {
	viewType: ViewType;
	setViewType: (vt: ViewType) => void;
}) {
	return (
		<div className='flex flex-wrap ml-auto overflow-hidden text-blue-800 border border-gray-200 rounded-md'>
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
}
