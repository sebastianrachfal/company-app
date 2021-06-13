import Spacer from 'components/atoms/Spacer';
import UserInfo from 'components/atoms/UserInfo';
import WorkspaceInfo from 'components/atoms/WorkspaceInfo';
import { WORKSPACE_ITEMS } from 'constants/index';
import { APIUserType, WorkspaceType } from 'types';
import UTItem from 'classes/UpdatesTagItem';
import UpdateTag from 'components/atoms/UpdateTag';
import { Link } from 'react-router-dom';

export default function PublicationCard({
	user,
	type = 0,
	title,
	content,
	tag,
}: {
	user: APIUserType | undefined;
	type: WorkspaceType;
	title: string;
	content: string;
	tag?: UTItem | undefined;
}) {
	const { name, Icon } = WORKSPACE_ITEMS[type];
	return (
		<Link to='/publication'>
			<div className='p-4 my-2 bg-white rounded-lg shadow-sm cursor-pointer h-[140px] flex flex-col justify-between'>
				<h4 className='font-semibold text-blue-700'>{title}</h4>
				<p className='my-2 text-sm text-gray-700'>{content}</p>
				<div className='flex items-center text-gray-700'>
					{tag ? (
						<UpdateTag tag={tag} />
					) : (
						<>
							<UserInfo user={user} light={false} />
							<Spacer />
							<WorkspaceInfo name={name} Icon={Icon} />
						</>
					)}

					<Spacer />
					<span className='text-sm'>
						Updated 12 months ago by {user?.name}
					</span>
				</div>
			</div>
		</Link>
	);
}
