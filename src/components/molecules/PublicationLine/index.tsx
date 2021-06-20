import { Link } from 'react-router-dom';
import { APIUserType } from 'types';
import UserDataLine from '../UserDataLine';

export default function PublicationLine({
	user,
	name,
	index,
}: {
	user: APIUserType | undefined;
	name?: string;
	index: number;
}) {
	return (
		<Link to='/publication'>
			<div className='flex h-16 overflow-hidden truncate transition duration-200 rounded-md cursor-pointer hover:bg-gray-50'>
				<img
					className='flex-shrink-0 object-cover w-16 h-full'
					alt='publication'
					src={
						[
							'https://images.unsplash.com/photo-1618035881605-dfe8d7eb387b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
							'https://images.unsplash.com/photo-1608447860289-19fcfc1824a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
							'https://images.unsplash.com/photo-1622069873046-39550b57c903?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
						][index]
					}
				/>
				<div className='flex flex-col justify-between px-3 py-1'>
					<h3 className='truncate text-md'>{name}</h3>
					<UserDataLine user={user} light={false} />
				</div>
			</div>
		</Link>
	);
}
