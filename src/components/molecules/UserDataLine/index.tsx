import { APIUserType } from 'types';
import cx from 'classnames';
import UserInfo from 'components/atoms/UserInfo';

export default function UserDataLine({
	user,
	light = true,
}: {
	user: APIUserType | undefined;
	light?: boolean;
}) {
	return (
		<div className='flex items-center space-x-2'>
			<span
				className={cx('text-sm font-light', {
					'text-gray-200': light,
					'text-gray-600': !light,
				})}
			>
				24 maj 2021
			</span>
			<UserInfo user={user} light={light} />
		</div>
	);
}
