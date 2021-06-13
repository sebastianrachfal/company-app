import cx from 'classnames';
import PaginationButton from 'components/atoms/PaginationButton';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

export default function Pagination({
	pageCount,
	selectedPage,
	setSelectedPage,
	bumpPage,
}: {
	pageCount: number;
	selectedPage: number;
	setSelectedPage: (val: number) => void;
	bumpPage: (val: number) => void;
}) {
	if (!pageCount) return null;

	return (
		<div className='flex justify-center w-full my-2 text-blue-800'>
			<div className='flex items-center space-x-1'>
				<PaginationButton
					className='hover:bg-blue-100'
					onClick={() => bumpPage(-1)}
				>
					<BiLeftArrow className='w-full' />
				</PaginationButton>
				<div>
					{new Array(pageCount).fill(0).map((_, index) => (
						<PaginationButton
							key={'page-' + index}
							className={cx({
								'bg-blue-200': index === selectedPage,
								'hover:bg-blue-100': index !== selectedPage,
							})}
							onClick={() => setSelectedPage(index)}
						>
							{index + 1}
						</PaginationButton>
					))}
				</div>
				<PaginationButton
					className='hover:bg-blue-100'
					onClick={() => bumpPage(1)}
				>
					<BiRightArrow className='w-full' />
				</PaginationButton>
			</div>
		</div>
	);
}
