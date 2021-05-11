import Search from 'components/Search';
import NavDropdown from 'components/NavDropdown';
import Icon from 'components/Icon';

export default function Navbar() {
	return (
		<nav className='w-screen h-[50px] py-1.5 px-3 bg-white flex justify-between shadow-lg'>
			<div className='flex-1 flex'>
				<img
					src='/assets/logo.png'
					alt='company logo'
					className='max-h-full'
				/>
				<NavDropdown />
			</div>
			<div className='flex-1 xs:flex-auto'>
				<Search />
			</div>
			<div className='flex space-x-2 flex-1 justify-end'>
				<Icon id='house2' />
				<Icon id='comments' colored />
				<Icon id='bell' colored />
			</div>
		</nav>
	);
}
