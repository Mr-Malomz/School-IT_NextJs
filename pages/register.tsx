import React from 'react';
import LinkOutline from '../components/LinkOutline';
import Link from 'next/link';
import InputField from '../components/InputField';
import GenSubmitButton from '../components/GenSubmitButton';

const register = () => {
	return (
		<div className='bg-white flex'>
			<div className='hidden h-auto w-5/12 bg-brand-main lg:flex flex-col justify-center '>
				<h1 className='text-4xl text-center leading-tight font-bold text-white mb-8 lg:text-4xl lg:leading-none'>
					Already Signed up?
				</h1>
				<p className='mb-8 text-center text-white'>
					To stay connected with us please login with your <br />{' '}
					personal info
				</p>
				<div className='flex justify-center'>
					<LinkOutline href='login' text='sign in' />
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
						Create Account
					</h1>
					<p className='opacity-75 mb-8 text-center'>
						Let’s get you all set up for your first onboarding{' '}
						<br /> experience
					</p>
					<form>
						<InputField
							placeholder='Firstname'
							type='text'
							name='firstname'
						/>
						<InputField
							placeholder='Lastname'
							type='text'
							name='lastname'
						/>
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
						<GenSubmitButton text='sign up' />
					</form>
					<p className='block lg:hidden'>
						<span className='text-gray-700'>
							Already Signed up?{' '}
						</span>{' '}
						<Link href='login'>
							<a className='text text-gray-900 font-bold hover:underline'>Log In</a>
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default register;
