interface ISideBarUserEntry {
	icon: string;
	text: string;
	iconBtn: string;
}
function SideBarUserEntry({ icon, text, iconBtn }: ISideBarUserEntry) {
	return (
		<div className='flex justify-between items-center p-1'>
			<div className='flex items-center flex-1'>
				<div className='w-7'>
					<img src={`/assets/icons/${icon}.png`} alt={icon} />
				</div>
				<span className='whitespace-nowrap text-xs'>{text}</span>
			</div>
			<button className='px-1 py-1 w-7 h-6 rounded-md border-[1px] border-gray-300 cursor-pointer focus:outline-none hover:bg-gray-100 flex justify-center items-center shadow-sm transition duration-100'>
				<img src={`/assets/icons/${iconBtn}.svg`} alt={iconBtn} />
			</button>
		</div>
	);
}

interface ISideBarLink {
	icon: string;
	text: string;
}
function SideBarLink({ icon, text }: ISideBarLink) {
	return (
		<div className='flex items-center py-2'>
			<div className='w-8'>
				<img src={`assets/icons/${icon}.svg`} alt={icon} />
			</div>
			<span className='text-sm'>{text}</span>
		</div>
	);
}

export default function UserSideBar() {
	return (
		<aside className='w-[200px] h-full p-3'>
			<div className='bg-white w-full h-fit rounded-lg shadow-md'>
				<div className='flex flex-col items-center p-2'>
					<img
						src='/assets/profile.svg'
						alt='profile'
						className='w-12'
					/>
					<span className='text-md font-semibold text-blue-500 tracking-tight'>
						Humberta Swift
					</span>
					<span className='text-xs text-gray-500'>
						Job title - Company
					</span>
				</div>
				<div className='border-t-2 border-gray-200 p-2'>
					<SideBarUserEntry
						icon='network'
						text='Your network'
						iconBtn='network'
					/>
					<SideBarUserEntry
						icon='publications'
						text='Your publications'
						iconBtn='plus'
					/>
				</div>
			</div>
			<div className='p-3'>
				<SideBarLink icon='publications' text='Publications' />
				<SideBarLink icon='ecosystem' text='Ecosystem' />
				<SideBarLink icon='entities2' text='Entities' />
			</div>
		</aside>
	);
}
