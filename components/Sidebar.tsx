import React, { FC } from 'react';
import Link from 'next/link';
import MenuClose from '../public/utils/svg/MenuClose';
import HomeIcon from '../public/utils/svg/nav/HomeIcon';
import EmployeeIcon from '../public/utils/svg/nav/EmployeeIcon';
import AttendanceIcon from '../public/utils/svg/nav/AttendanceIcon';
import AccountIcon from '../public/utils/svg/nav/AccountIcon';
import EventIcon from '../public/utils/svg/nav/EventIcon';

interface NavProps {
	isModalOpen: boolean;
	handleModal: () => void;
}

const Sidebar: FC<NavProps> = ({ isModalOpen, handleModal }) => {
	return (
		<div>
			<nav
				className={`bg-admin-nav-light ${
					isModalOpen ? 'block' : 'hidden'
				} lg:block absolute w-56 mt-2 ml-3 z-10 lg:mt-0 lg:ml-0 rounded-lg lg:min-h-full lg:rounded-none lg:relative`}
			>
				<div className='flex justify-between py-3 px-8'>
					<Link href='#'>
						<a>
							<img
								src='/utils/images/logo-mini.png'
								className='h-8 mb-12 '
								alt='School-logo'
							/>
						</a>
					</Link>
					<MenuClose
						color='#ffffff'
						className='cursor-pointer lg:hidden'
						onClick={handleModal}
					/>
				</div>
				<div className='bg-admin-nav flex flex-col justify-center items-center py-3 '>
					<img
						src='https://via.placeholder.com/150'
						className='h-16 w-h-16 lg:h-24 lg:w-24 mb-3 rounded-full'
						alt='School-logo'
					/>
					<h4 className='text-white font-semibold mb-3'>
						Richard Oyome
					</h4>
					<h6 className='text-white text-xs font-medium'>
						Super Admin
					</h6>
				</div>
				<div className='mt-4'>
					<Link href='dashboard'>
						<a className='flex items-center pl-8 hover:bg-admin-nav py-2 mb-2 active_nav'>
							<HomeIcon className='mr-4' />
							<span className='font-semibold text-white capitalize'>
								home
							</span>
						</a>
					</Link>
					<Link href='dashboard'>
						<a className='flex items-center pl-8 hover:bg-admin-nav py-2 mb-2'>
							<EmployeeIcon className='mr-4' />
							<span className='font-semibold text-white capitalize'>
								employee
							</span>
						</a>
					</Link>
					<Link href='dashboard'>
						<a className='flex items-center pl-8 hover:bg-admin-nav py-2 mb-2'>
							<AttendanceIcon className='mr-4' />
							<span className='font-semibold text-white capitalize'>
								attendance
							</span>
						</a>
					</Link>
					<Link href='dashboard'>
						<a className='flex items-center pl-8 hover:bg-admin-nav py-2 mb-2'>
							<AccountIcon className='mr-4' />
							<span className='font-semibold text-white capitalize'>
								account
							</span>
						</a>
					</Link>
					<Link href='dashboard'>
						<a className='flex items-center pl-8 hover:bg-admin-nav py-2 mb-2'>
							<EventIcon className='mr-4' />
							<span className='font-semibold text-white capitalize'>
								events
							</span>
						</a>
					</Link>
				</div>
			</nav>
		</div>
	);
};

export default Sidebar;
