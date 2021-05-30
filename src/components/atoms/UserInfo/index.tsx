import cx from 'classnames';
import { APIUserType } from 'types';

export default function UserInfo({
	light,
	user,
}: {
	light: boolean;
	user: APIUserType | undefined;
}) {
	return (
		<div className={cx('flex items-center space-x-2', { 'py-2': light })}>
			<img
				src={user?.image}
				className='h-4 rounded-full'
				alt='userphoto'
			/>{' '}
			<span
				className={cx({
					'text-gray-300': light,
					'text-gray-600': !light,
				})}
			>
				{user?.name}
			</span>
		</div>
	);
}
