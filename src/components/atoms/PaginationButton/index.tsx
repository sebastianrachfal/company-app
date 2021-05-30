import cx from 'classnames';
import { MouseEventHandler, ReactChild } from 'react';

export default function PaginationButton({
	children,
	className,
	onClick,
}: {
	children?: ReactChild;
	className?: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
	return (
		<button
			className={cx(
				'p-2 w-[33px] rounded-xl transition duration-200 focus:outline-none',
				className
			)}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
