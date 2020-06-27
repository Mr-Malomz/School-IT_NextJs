import React from 'react';
import Link from 'next/link';
import InputField from '../components/InputField';
import GenSubmitButton from '../components/GenSubmitButton';

const contact = () => {
	return (
		<div className='contact-svg-1 h-screen p-8'>
			<Link href='/'>
				<a>
					<img
						src='/utils/images/logo.png'
						className='h-8 mb-12 w-32'
						alt='School-logo'
					/>
				</a>
			</Link>
			<section className='flex justify-between flex-col lg:flex-row'>
				<div className='flex flex-col w-full'>
					<h1 className='text-4xl leading-tight font-bold text-text-color-main mb-8 lg:text-4xl lg:leading-none'>
						Get in touch
					</h1>
					<p className='opacity-50 mb-8'>
						Please fill out the form and we will be in touch
					</p>
					<form>
						<InputField
							placeholder='Fullname'
							type='text'
							name='fullname'
						/>
						<InputField
							placeholder='Your email address'
							type='email'
							name='fullname'
						/>
						<textarea
							className='appearance-none border mb-8 border-brand-main border-opacity-75 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none'
							name='message'
							placeholder='Messages'
							rows={4}
						/>
						<GenSubmitButton text='submit'/>
					</form>
				</div>
				<div className='hidden lg:block w-full'>
					<h1 className='text-4xl text-right leading-tight font-bold text-text-color-main mb-8 lg:text-4xl lg:leading-none'>
						contact
					</h1>
				</div>
			</section>
		</div>
	);
};

export default contact;
