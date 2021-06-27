import Search from 'components/atoms/Search';
import NavDropdown from 'components/molecules/NavDropdown';
import Icon from 'components/atoms/Icon';
import { Link } from 'react-router-dom';
import { RiChat1Fill, RiHome4Fill, RiNotification3Fill } from 'react-icons/ri';

export default function Navbar() {
	return (
		<div className='sticky top-0 z-50 flex justify-center w-screen bg-white shadow-md'>
			<nav className='w-full px-5 xs:px-10 max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] py-1.5 flex justify-between flex-wrap'>
				<div className='flex items-center flex-1'>
					<Link to='/' className='flex-shrink-0 w-8 h-8'>
						<img src='/assets/logo.png' alt='company logo' />
					</Link>

					<NavDropdown />
				</div>
				<div className='order-3 w-full h-10 mt-4 md:flex-1 md:order-none md:mt-0'>
					<Search />
				</div>
				<div className='flex justify-end flex-1 space-x-2'>
					<Icon Icon={RiHome4Fill} href='/' />
					<Icon Icon={RiChat1Fill} href='/comments' colored />
					<Icon
						Icon={RiNotification3Fill}
						href='/notifications'
						colored
						notifications
					/>
				</div>
			</nav>
		</div>
	);
}
