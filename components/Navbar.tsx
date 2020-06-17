import React, { useState } from 'react';
import MenuIcon from '../public/utils/svg/MenuIcon';
import Link from 'next/link';
import MenuClose from '../public/utils/svg/MenuClose';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	return (
		<nav className='bg-brand-white lg:flex lg:justify-between'>
			<div className='flex items-center justify-between px-4 py-2 lg:px-8'>
				<div className=''>
					<img
						src='/utils/images/logo.png'
						className='h-8'
						alt='School-logo'
					/>
				</div>
				<div className=''>
					<button
						className='block text-white hover:text-white focus:text-white focus:outline-none lg:hidden'
						type='button'
						onClick={() => setIsOpen(!isOpen)}
					>
						{isOpen ? <MenuClose /> : <MenuIcon />}
					</button>
				</div>
			</div>
			<div className={`px-4 pt-2 pb-3 ${isOpen ? 'block' : 'hidden'} lg:flex`}>
				<Link href='#'>
					<a className='block font-medium capitalize py-1 text-gray-700 hover:text-brand-main-hover lg:mt-3 lg:mb-3 lg:mr-8'>
						home
					</a>
				</Link>
				<Link href='about'>
					<a className='block font-medium capitalize py-1 mt-1 text-gray-700 hover:text-brand-main-hover lg:mt-3 lg:mb-3 lg:mr-8'>
						about
					</a>
				</Link>
				<Link href='#'>
					<a className='block font-medium capitalize py-1 mt-1 text-gray-700 hover:text-brand-main-hover lg:mt-3 lg:mb-3 lg:mr-8'>
						contact
					</a>
				</Link>
				<Link href='#'>
					<a className='block font-medium capitalize py-1 mt-3 mb-3 text-brand-main w-24 border-solid border-2 border-brand-main rounded-full text-center hover:bg-brand-main-hover hover:text-white lg:mr-8'>
						login
					</a>
				</Link>
				<Link href='#'>
					<a className='block font-medium capitalize py-1 mt-3 mb-3 bg-brand-main w-24 text-white rounded-full text-center hover:bg-brand-main-hover lg:mr-8'>
						sign up
					</a>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
