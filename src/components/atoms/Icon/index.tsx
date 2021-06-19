import cx from 'classnames';
import { Link } from 'react-router-dom';

interface IIcon {
	id: string;
	colored?: boolean;
	className?: string;
	href?: string;
	notifications?: boolean;
}

export default function Icon({
	id,
	colored = false,
	className,
	href,
	notifications,
}: IIcon) {
	return (
		<Link to={href || ''}>
			<div
				className={cx(
					'h-[38px] w-[38px] flex items-center justify-center rounded-full relative',
					{ 'bg-gray-200': colored },
					className
				)}
			>
				<img src={`/assets/icons/${id}.svg`} alt={id} />
				{notifications && (
					<div className='absolute pl-[1px] text-[10px] w-4 h-4 items-center justify-center flex text-white bg-blue-400 rounded-full -top-0.5 -right-0.5'>
						2
					</div>
				)}
			</div>
		</Link>
	);
}
