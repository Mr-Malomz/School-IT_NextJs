import React from 'react';
import Link from 'next/link';
import LinkButton from '../components/LinkButton';
import AboutSVG from '../public/utils/svg/AboutSVG';

const About = () => {
	return (
		<div className='h-screen'>
			<section className='h-full w-full flex relative'>
				<div className='bg-white w-full p-8 lg:p-12 flex flex-col justify-between'>
					<Link href='/'>
						<a>
							<img
								src='/utils/images/logo.png'
								className='h-8 mb-12 w-32'
								alt='School-logo'
							/>
						</a>
					</Link>
					<p className='opacity-75'>
						&copy; {`${new Date().getFullYear()}`} schoolIT
						Technology
					</p>
				</div>
				<div className='bg-brand-sec w-full'></div>
			</section>
			<section
				className='bg-white shadow absolute top-0 bottom-0 left-0 right-0 w-11/12 lg:w-9/12 m-auto p-4 lg:pl-8 flex'
				style={{ height: '325px' }}
			>
                <div className='w-full'>
					<h1
						className='capitalize font-black opacity-25 relative'
						style={styles.h1}
					>
						about
					</h1>
					<h3
						className='capitalize text-xl font-bold absolute'
						style={styles.h3}
					>
						about
					</h3>
                    <p className='mt-4 mb-4 text-sm lg:text-base'>
						SchoolIT Technology is designed to automate a school's
						diverse operations from classes, exams to school events
						calendar. It provides a powerful online community to
						bring parents, teachers and students on a common
						interactive platform.
					</p>
                    <LinkButton text='Get Started' href='register' />
				</div>
                <div className='lg:w-full hidden lg:block lg:flex justify-center items-center'>
                    <AboutSVG />
                </div>
			</section>
		</div>
	);
};

const styles = {
	h1: {
		fontSize: '54px',
		opacity: 0.05,
	},
	h3: {
		left: '80px',
		transform: 'translateY(-50px)',
	},
};

export default About;
