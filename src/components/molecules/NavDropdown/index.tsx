import { useState, useRef, MutableRefObject } from 'react';
import cx from 'classnames';
import {
	RiDoorLockFill,
	RiLogoutCircleLine,
	RiSettings3Fill,
	RiArrowDownSLine,
	RiUser3Fill,
} from 'react-icons/ri';
import useOnClickOutside from './DropDown.hook';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userSelector } from 'redux/slices/user';
import { DROPDOWN_DATA } from 'constants/index';
import DropDownItem from 'classes/UpdatesTagItem';

const getItemFromString = (item: string) => {
	switch (item) {
		case 'privacy':
			return new DropDownItem('Privacy', RiDoorLockFill, '');
		case 'settings':
			return new DropDownItem('Settings', RiSettings3Fill, '');
		case 'me':
			return new DropDownItem('Profile', RiUser3Fill, '');
		default:
			return DROPDOWN_DATA[0].items[0];
	}
};

export default function NavDropdown() {
	const [isShown, setIsShown] = useState(false);
	const [searchValue, setSearchValue] = useState('');
	const dropdownRef = useRef() as MutableRefObject<HTMLInputElement>;
	const buttonRef = useRef() as MutableRefObject<HTMLInputElement>;

	const dropdownItems = DROPDOWN_DATA.map(({ name, items, color }) => ({
		name,
		items: items.filter((item) =>
			item.name.toLowerCase().includes(searchValue)
		),
		color,
	})).filter(({ items }) => items.length > 0);

	const location = useLocation()
		.pathname.replace(/\//g, ' ')
		.trim()
		.split(' ');

	const currentLocation = location[location.length - 1];

	const currentItem: any =
		DROPDOWN_DATA.flatMap(({ items }) => items).find(
			({ name }) =>
				currentLocation === name.toLowerCase().split(' ').join('-')
		) || getItemFromString(currentLocation);

	const { user } = useSelector(userSelector);

	useOnClickOutside(dropdownRef, buttonRef, () => setIsShown(false));

	return (
		<div
			onClick={(e) => {
				setIsShown(!isShown);
			}}
			ref={buttonRef}
			className='select-none ml-2 md:ml-4 flex items-center justify-between w-full px-1 cursor-pointer max-w-[270px] pr-4 relative'
		>
			<div className='flex items-center'>
				{currentItem.ItemIcon && (
					<currentItem.ItemIcon className='w-5 h-5 text-gray-600' />
				)}
				<h2 className='ml-2 text-lg font-semibold text-gray-600 truncate'>
					{currentItem.name}
				</h2>
			</div>
			<RiArrowDownSLine
				className={cx('w-5 h-5 transform transition duration-200', {
					'rotate-180': isShown,
				})}
			/>
			{isShown && (
				<div
					ref={dropdownRef}
					onClick={(e) => e.stopPropagation()}
					className='absolute w-auto p-3 px-4 pt-2 bg-white border border-gray-200 rounded-sm shadow-lg isolate top-full'
				>
					<input
						placeholder='Filter...'
						autoFocus
						onChange={(e) =>
							setSearchValue(e.target.value.trim().toLowerCase())
						}
						className='w-full h-full p-2 text-sm border border-gray-300 rounded-lg focus:outline-none'
					/>
					<div>
						{dropdownItems.map(
							({ name: section_name, items, color }) => (
								<div key={section_name}>
									<span className='pt-2 text-xs font-semibold text-gray-400'>
										{section_name}
									</span>
									<div className='mt-1 ml-1'>
										{items.map(
											({ name, ItemIcon, href }) => (
												<Link to={href} key={name}>
													<div className='flex items-center py-1'>
														<ItemIcon
															className={`h-6 w-6 ${color}`}
														/>
														<span className='ml-4 text-sm text-gray-900 whitespace-nowrap'>
															{name}
														</span>
													</div>
												</Link>
											)
										)}
									</div>
								</div>
							)
						)}
					</div>
					<div
						className={cx('border-gray-300 border-b py-1 my-1', {
							'border-t': dropdownItems.length > 0,
						})}
					>
						<span className='pt-2 text-xs font-semibold text-gray-400'>
							Account
						</span>
						<div className='mt-1'>
							<Link to='/me'>
								<div className='flex items-center mb-2'>
									<img
										src={user?.image}
										alt='profile'
										className='w-8 rounded-full'
									/>
									<div className='flex flex-col ml-3'>
										<span className='text-sm tracking-tight'>
											{user?.name}
										</span>
										<span className='text-xs text-blue-500'>
											See profile
										</span>
									</div>
								</div>
							</Link>
							<Link to={'/privacy'}>
								<div className='flex items-center mb-2 ml-1'>
									<RiDoorLockFill className='w-6 h-6 text-gray-900' />
									<span className='ml-4 text-sm text-gray-900'>
										Privacy
									</span>
								</div>
							</Link>

							<Link to={'/settings'}>
								<div className='flex items-center mb-2 ml-1'>
									<RiSettings3Fill className='w-6 h-6 text-gray-900' />
									<span className='ml-4 text-sm text-gray-900'>
										Settings
									</span>
								</div>
							</Link>
						</div>
					</div>
					<div className='flex items-center justify-center p-1 pt-3'>
						<RiLogoutCircleLine className='w-4 h-5 text-gray-500' />
						<span className='ml-1 text-gray-500'>Logout</span>
					</div>
				</div>
			)}
		</div>
	);
}
