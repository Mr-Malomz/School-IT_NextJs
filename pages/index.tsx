import Head from 'next/head';

import React from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import LandingBodySvg from '../public/utils/svg/LandingBodySvg';
import ModernIcon from '../public/utils/svg/ModernIcon';
import IncreaseIcon from '../public/utils/svg/IncreaseIcon';
import WellIcon from '../public/utils/svg/WellIcon';
import LandingPage1SVG from '../public/utils/svg/LandingPage1SVG';
import IntIcon from '../public/utils/svg/IntIcon';
import MassiveIcon from '../public/utils/svg/MassiveIcon';
import EasyIcon from '../public/utils/svg/EasyIcon';

const Home = () => {
	return (
		<div className=''>
			<Navbar />
			<section className='bg-white h-auto mb-12 flex flex-col lg:flex-row'>
				<div className='main-svg-comp-1 px-12 flex items-center lg:px-24 w-full'>
					<div className='flex flex-col'>
						<h1 className='text-4xl leading-tight text-text-color-main lg:text-5xl lg:leading-none'>
							A student-centered <br /> education and <br />{' '}
							experiential learning <br /> platform
						</h1>
						<Link href='#'>
							<a className='block font-medium capitalize flex items-center justify-center py-1 mt-8 h-12 mb-3 bg-brand-main w-64 text-white rounded-full text-center hover:bg-brand-main-hover lg:mr-8'>
								get started
							</a>
						</Link>
					</div>
				</div>
				<div className='main-svg-comp-2 w-full'>
					<div className='w-10/12 h-full lg:flex lg:items-center'>
						<LandingBodySvg />
					</div>
				</div>
			</section>
			<section className='bg-brand-sec bg-opacity-25 py-8 h-auto mb-12 flex flex-col lg:flex-row'>
				<div className='px-12 flex items-center lg:px-24 w-full'>
					<div className='flex flex-col'>
						<h2 className='text-3xl leading-tight text-text-color-main mb-8 lg:text-4xl lg:leading-none'>
							Increase adoption across <br /> your learning
							community
						</h2>
						<h6 className='text-lg text-opacity-25 mb-8 leading-tight '>
							SchoolIT is designed to automate a school's diverse
							operations from classes, exams to school events
							calendar.{' '}
						</h6>
						<div className='mb-8 lg:mb-0'>
							<div className='flex mb-6'>
								<ModernIcon />
								<p className='opacity-75 ml-4'>
									Modern tools that promote
									technology-oriented culture and digital
									literacy.
								</p>
							</div>
							<div className='flex mb-6'>
								<IncreaseIcon />
								<p className='opacity-75'>
									Increased student, parent, and family
									engagement.
								</p>
							</div>
							<div className='flex '>
								<WellIcon />
								<p className='opacity-75'>
									Well-received tools that enable progressive
									practices.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='w-full px-5'>
					<div className='w-10/12 h-full lg:flex lg:items-center'>
						<LandingPage1SVG />
					</div>
				</div>
			</section>
			<section className='main-svg-comp-3 bg-white py-8 h-auto mb-12'>
				<div className='flex flex-col justify-center items-center lg:flex-row transform translate-y-8'>
					<div className='rounded-md w-64 h-64 shadow bg-white flex flex-col justify-center items-center mb-8 lg:ml-8'>
						<IntIcon />
						<h3 className='opacity-75 mt-8 text-2xl text-center'>
							Intuitive interface
						</h3>
					</div>
					<div className='rounded-md w-64 h-64 shadow bg-white flex flex-col justify-center items-center mb-8 lg:ml-8'>
						<MassiveIcon />
						<h3 className='opacity-75 mt-8 text-2xl text-center'>
							Massive time savings for entire staff
						</h3>
					</div>
					<div className='rounded-md w-64 h-64 shadow bg-white flex flex-col justify-center items-center mb-8 lg:ml-8'>
						<EasyIcon />
						<h3 className='opacity-75 mt-8 text-2xl text-center'>
							Easy to use
						</h3>
					</div>
				</div>
				<div className='transform translate-y-5 flex justify-center'>
					<Link href='#'>
						<a className='block font-medium capitalize flex items-center justify-center py-1 mt-8 h-12 mb-3 bg-brand-main w-64 text-white rounded-full text-center hover:bg-brand-main-hover lg:mr-8'>
							get started
						</a>
					</Link>
				</div>
			</section>
		</div>
	);
};

export default Home;
