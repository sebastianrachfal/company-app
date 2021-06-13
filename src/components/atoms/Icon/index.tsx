import cx from 'classnames';
import { Link } from 'react-router-dom';

interface IIcon {
	id: string;
	colored?: boolean;
	className?: string;
	href?: string;
}

export default function Icon({ id, colored = false, className, href }: IIcon) {
	return (
		<Link to={href || ''}>
			<div
				className={cx(
					'h-[38px] w-[38px] flex items-center justify-center rounded-full',
					{ 'bg-gray-200': colored },
					className
				)}
			>
				<img src={`/assets/icons/${id}.svg`} alt={id} />
			</div>
		</Link>
	);
}
