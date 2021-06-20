// import useSWR from 'data/useSWR';
import PublicationLine from 'components/molecules/PublicationLine';
import UserDataLine from 'components/molecules/UserDataLine';
import { getUserById } from 'helpers';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from 'redux/store';
import { APIPublicationType } from 'types';

export default function LatestPublications() {
	const { publications, users } = useSelector(
		(state: RootState) => state.apiData
	);
	return (
		<div className='flex flex-col w-full overflow-hidden items-stretch md:max-h-[300px] bg-white md:flex-row rounded-xl'>
			<Link to='/publication'>
				<div className='relative h-full'>
					<img
						className='object-cover w-full h-80 md:h-full md:w-80'
						alt='cover'
						src='https://images.unsplash.com/photo-1621972751640-afca08e77f15?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80'
					/>
					<div className='absolute top-0 left-0 flex items-end w-full h-full bg-gradient-to-t from-gray-700 to-transparent'>
						<div className='w-full px-4 pb-4'>
							<h3 className='text-white truncate whitespace-nowrap'>
								{publications?.[0]?.title}
							</h3>
							<UserDataLine
								user={getUserById(
									users,
									publications?.[0]?.userId
								)}
							/>
						</div>
					</div>
				</div>
			</Link>
			<div className='flex flex-col justify-between flex-1 h-full p-3 min-h-[300px]'>
				<h2 className='text-xl font-semibold'>Latest publications</h2>
				{publications
					?.slice(1, 4)
					?.map(
						(
							{ title, userId }: APIPublicationType,
							index: number
						) => (
							<PublicationLine
								key={'latest-' + index}
								name={title}
								user={getUserById(users, userId)}
								index={index}
							/>
						)
					)}
				<Link to='/publications'>
					<span className='text-blue-600 cursor-pointer'>
						See more publications
					</span>
				</Link>
			</div>
		</div>
	);
}
