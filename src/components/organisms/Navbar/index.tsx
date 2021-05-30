import Search from 'components/atoms/Search';
import NavDropdown from 'components/molecules/NavDropdown';
import Icon from 'components/atoms/Icon';
import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<div className='flex justify-center w-screen bg-white shadow-lg'>
			<nav className='w-screen max-w-[1200px] h-[50px] py-1.5 px-3 flex justify-between '>
				<div className='flex flex-1'>
					<Link to='/' className='w-10'>
						<img
							src='/assets/logo.png'
							alt='company logo'
							className='max-h-full'
						/>
					</Link>

					<NavDropdown />
				</div>
				<div className='flex-1 xs:flex-auto'>
					<Search />
				</div>
				<div className='flex justify-end flex-1 space-x-2'>
					<Icon id='house2' />
					<Icon id='comments' colored />
					<Icon id='bell' colored />
				</div>
			</nav>
		</div>
	);
}
