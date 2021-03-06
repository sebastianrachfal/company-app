import { BiNetworkChart } from 'react-icons/bi';
import { BsNewspaper } from 'react-icons/bs';
import {
	RiEarthFill,
	RiBuildingFill,
	RiUserAddFill,
	RiAddLine,
} from 'react-icons/ri';
import { IconType } from 'react-icons';
import { useSelector } from 'react-redux';
import { userSelector } from 'redux/slices/user';
import { Link } from 'react-router-dom';

interface ISideBarUserEntry {
	Icon: IconType;
	text: string;
	IconBtn: IconType;
	href: string;
}
function SideBarUserEntry({ Icon, text, IconBtn, href }: ISideBarUserEntry) {
	return (
		<Link to={href}>
			<div className='flex items-center justify-between p-1'>
				<div className='flex items-center flex-1'>
					<div className='flex items-center w-10 h-8'>
						<Icon className='w-8 h-6' />
					</div>
					<span className='text-sm whitespace-nowrap'>{text}</span>
				</div>
				<button className='px-1 py-1 w-7 h-6 rounded-md border-[1px] border-gray-300 cursor-pointer focus:outline-none hover:bg-gray-100 flex justify-center items-center shadow-sm transition duration-100'>
					<IconBtn />
				</button>
			</div>
		</Link>
	);
}

interface ISideBarLink {
	Icon: IconType;
	text: string;
	href: string;
}
function SideBarLink({ Icon, text, href }: ISideBarLink) {
	return (
		<Link to={href}>
			<div className='flex items-center py-2 text-gray-600'>
				<div className='flex items-center justify-center w-8'>
					<Icon className='w-6 h-5' />
				</div>
				<span className='ml-2 text-sm'>{text}</span>
			</div>
		</Link>
	);
}

export default function UserSideBar() {
	const { user } = useSelector(userSelector);

	return (
		<div className='col-span-12 lg:col-span-3'>
			<aside className='sticky top-[65px]'>
				<div className='w-full bg-white rounded-lg shadow-md h-fit'>
					<Link to='/me'>
						<div className='flex flex-col items-center p-2 pb-4'>
							<img
								style={{ textIndent: '100%' }}
								src={user?.image}
								alt='profile'
								className='w-20 my-2 overflow-hidden rounded-full whitespace-nowrap'
							/>
							<span className='text-lg font-semibold tracking-tight text-blue-500 truncate'>
								{user?.name}
							</span>
							<span className='text-xs text-gray-500'>
								Job title - Company
							</span>
						</div>
					</Link>

					<div className='p-2 border-t-2 border-gray-200'>
						<SideBarUserEntry
							Icon={BiNetworkChart}
							text='Your network'
							IconBtn={RiUserAddFill}
							href='/network'
						/>
						<SideBarUserEntry
							Icon={BsNewspaper}
							text='Your publications'
							IconBtn={RiAddLine}
							href='/publications'
						/>
					</div>
				</div>
				<div className='p-3'>
					<SideBarLink
						Icon={BsNewspaper}
						text='Publications'
						href='/publications'
					/>
					<SideBarLink
						Icon={RiEarthFill}
						text='Ecosystem'
						href='/ecosystem'
					/>
					<SideBarLink
						Icon={RiBuildingFill}
						text='Entities'
						href='/entities'
					/>
				</div>
			</aside>
		</div>
	);
}
