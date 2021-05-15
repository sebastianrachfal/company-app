import { BiNetworkChart } from 'react-icons/bi';
import { BsNewspaper } from 'react-icons/bs';
import { RiEarthFill, RiBuildingFill } from 'react-icons/ri';
import { IconType } from 'react-icons';

interface ISideBarUserEntry {
	Icon: IconType;
	text: string;
	iconBtn: string;
}
function SideBarUserEntry({ Icon, text, iconBtn }: ISideBarUserEntry) {
	return (
		<div className='flex items-center justify-between p-1'>
			<div className='flex items-center flex-1'>
				<div className='flex items-center w-10 h-8'>
					<Icon className='w-8 h-6' />
				</div>
				<span className='text-sm whitespace-nowrap'>{text}</span>
			</div>
			<button className='px-1 py-1 w-7 h-6 rounded-md border-[1px] border-gray-300 cursor-pointer focus:outline-none hover:bg-gray-100 flex justify-center items-center shadow-sm transition duration-100'>
				<img src={`/assets/icons/${iconBtn}.svg`} alt={iconBtn} />
			</button>
		</div>
	);
}

interface ISideBarLink {
	Icon: IconType;
	text: string;
}
function SideBarLink({ Icon, text }: ISideBarLink) {
	return (
		<div className='flex items-center py-2'>
			<div className='flex items-center justify-center w-8'>
				<Icon className='w-6 h-5' />
			</div>
			<span className='ml-2 text-sm'>{text}</span>
		</div>
	);
}

export default function UserSideBar() {
	return (
		<aside className='col-span-3'>
			<div className='w-full bg-white rounded-lg shadow-md h-fit'>
				<div className='flex flex-col items-center p-2'>
					<img
						src='/assets/profile.svg'
						alt='profile'
						className='w-12 my-2'
					/>
					<span className='text-lg font-semibold tracking-tight text-blue-500'>
						Humberta Swift
					</span>
					<span className='text-xs text-gray-500'>
						Job title - Company
					</span>
				</div>
				<div className='p-2 border-t-2 border-gray-200'>
					<SideBarUserEntry
						Icon={BiNetworkChart}
						text='Your network'
						iconBtn='network'
					/>
					<SideBarUserEntry
						Icon={BsNewspaper}
						text='Your publications'
						iconBtn='plus'
					/>
				</div>
			</div>
			<div className='p-3'>
				<SideBarLink Icon={BsNewspaper} text='Publications' />
				<SideBarLink Icon={RiEarthFill} text='Ecosystem' />
				<SideBarLink Icon={RiBuildingFill} text='Entities' />
			</div>
		</aside>
	);
}
