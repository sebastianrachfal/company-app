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
				'p-2 w-10 h-10 text-center rounded-full transition duration-200 focus:outline-none',
				className
			)}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
