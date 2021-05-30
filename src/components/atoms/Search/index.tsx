import cx from 'classnames';
import Icon from 'components/atoms/Icon';
import { ChangeEventHandler } from 'react';

export default function Search({
	placeholder = 'Search',
	className,
	onChange,
}: {
	placeholder?: string;
	className?: string;
	onChange?: ChangeEventHandler<HTMLInputElement>;
}) {
	return (
		<div className='relative w-full h-full overflow-hidden border border-gray-300 rounded-lg focus-within:border-gray-500'>
			<input
				placeholder={placeholder}
				onChange={onChange}
				className={cx(
					'w-full h-full text-center padding-2 focus:outline-none',
					className
				)}
			/>
			<Icon
				id='search'
				className='absolute transform -translate-y-1/2 pointer-events-none right-1 top-1/2'
			/>
		</div>
	);
}
