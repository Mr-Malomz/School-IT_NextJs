import React from 'react';
import Link from 'next/link';
import InputField from '../components/InputField';
import GenSubmitButton from '../components/GenSubmitButton';
import LinkOutline from '../components/LinkOutline';
import Head from 'next/head';

const login = () => {
	return (
		<div>
			<Head>
				<title>Login</title>
				<meta charSet='utf-8' />
				<meta
					name='viewport'
					content='initial-scale=1.0, width=device-width'
				/>
				<meta name='SchoolIT' content='HTML, CSS, JavaScript' />
				<meta
					name='Log In'
					content='HTML, CSS, JavaScript'
				/>
			</Head>
			<div className='h-screen bg-white flex'>
				<div className='hidden h-full w-5/12 bg-brand-main lg:flex flex-col justify-center '>
					<h1 className='text-4xl text-center leading-tight font-bold text-white mb-8 lg:text-4xl lg:leading-none'>
						Not signed up yet?
					</h1>
					<p className='mb-8 text-center text-white'>
						Click the link below to get started
					</p>
					<div className='flex justify-center'>
						<LinkOutline href='register' text='sign up' />
					</div>
				</div>
				<div className='h-full p-8 w-full'>
					<Link href='/'>
						<a>
							<img
								src='/utils/images/logo.png'
								className='h-8 mb-12 w-32'
								alt='School-logo'
							/>
						</a>
					</Link>
					<div className='flex flex-col w-full lg:w-9/12 justify-center mx-auto'>
						<h1 className='text-4xl text-center leading-tight font-bold text-text-color-main mb-8 lg:text-4xl lg:leading-none'>
							Access Account
						</h1>
						<p className='opacity-75 mb-8 text-center'>
							Gain access to your account and explore!
						</p>
						<form>
							<InputField
								placeholder='Email'
								type='email'
								name='email'
							/>
							<InputField
								placeholder='Password'
								type='password'
								name='password'
							/>
							<GenSubmitButton text='sign in' />
						</form>
						<p className='block lg:hidden'>
							<span className='text-gray-700'>
								Don't have an account?{' '}
							</span>{' '}
							<Link href='register'>
								<a className='text text-gray-900 font-bold hover:underline'>
									Register
								</a>
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default login;
