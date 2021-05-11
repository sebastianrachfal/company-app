import cx from 'classnames';

interface IIcon {
	id: string;
	colored?: boolean;
	className?: string;
}

export default function Icon({ id, colored = false, className }: IIcon) {
	return (
		<div
			className={cx(
				'h-[38px] w-[38px] flex items-center justify-center rounded-full',
				{ 'bg-gray-200': colored },
				className
			)}
		>
			<img src={`/assets/icons/${id}.svg`} alt={id} />
		</div>
	);
}
