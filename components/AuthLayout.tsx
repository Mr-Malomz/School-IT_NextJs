import React, { FC, useState } from 'react';
import Head from 'next/head';
import MenuIcon from '../public/utils/svg/MenuIcon';
import ArrowDown from '../public/utils/svg/ArrowDown';
import Link from 'next/link';
import ArrowUp from '../public/utils/svg/ArrowUp';
import Sidebar from './Sidebar';

interface LayoutProps {
	pageTitle: string;
}

const AuthLayout: FC<LayoutProps> = ({ children, pageTitle }) => {
	const [state, setState] = useState({
		isOpen: false,
		isModalOpen: false,
	});

	const handleModal = () =>
		setState({ ...state, isModalOpen: !state.isModalOpen });

	return (
		<div>
			<Head>
				<title>{pageTitle}</title>
				<meta charSet='utf-8' />
				<meta
					name='viewport'
					content='initial-scale=1.0, width=device-width'
				/>
				<meta name='SchoolIT' content='HTML, CSS, JavaScript' />
				<meta
					name='School Management System'
					content='HTML, CSS, JavaScript'
				/>
			</Head>
			<div className='min-h-screen bg-admin-white lg:flex lg:justify-between'>
				<Sidebar
					isModalOpen={state.isModalOpen}
					handleModal={handleModal}
				/>
				<section className='w-full'>
					<header className='px-4 py-2 flex justify-between lg:px-8 lg:py-8 w-full lg:justify-end'>
						<MenuIcon
							onClick={handleModal}
							className='cursor-pointer lg:hidden'
						/>
                        <nav>
							<div
                                className='flex h-10 cursor-pointer'
								onClick={() =>
									setState({
										...state,
										isOpen: !state.isOpen,
									})
								}
							>
								<img
									src='https://via.placeholder.com/150'
									className='h-8 mb-12 w-8 mr-4 border-brand-main border-2 rounded-full'
									alt='School-logo'
								/>
								<p className='font-semibold capitalize'>
									account{' '}
									{!state.isOpen ? (
										<ArrowDown />
									) : (
										<ArrowUp />
									)}
								</p>
							</div>
							<div
								className={`bg-gray-100 transition ease-out duration-700 py-2 rounded-lg shadow ${
									state.isOpen ? 'block' : 'hidden'
								}`}
							>
								<Link href='#'>
									<a className='block font-semibold w-full capitalize py-1 text-center text-gray-700 hover:bg-gray-200 lg:mt-3 lg:mb-3 lg:mr-8'>
										profile
									</a>
								</Link>
								<Link href='#'>
									<a className='block font-semibold w-full capitalize py-1 text-center text-gray-700 hover:bg-gray-200 lg:mt-3 lg:mb-3 lg:mr-8'>
										logout
									</a>
								</Link>
							</div>
						</nav>
					</header>
                    <section className='px-4 py-2 lg:px-8'>
                        {children}
                    </section>
				</section>
			</div>
		</div>
	);
};

export default AuthLayout;
