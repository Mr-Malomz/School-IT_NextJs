import React from 'react';
import AuthLayout from '../../components/AuthLayout';
import MenuClose from '../../public/utils/svg/MenuClose';
import Link from 'next/link';
import InputFormField from '../../components/InputFormField';
import SelectFormField from '../../components/SelectFormField';
import ButtonForm from '../../components/ButtonForm';

const ManageEmp = () => {
	return (
		<AuthLayout pageTitle='Manage Employee'>
			<h3 className='text-2xl font-semibold capitalize mb-6'>
				manage employee
			</h3>
			<section className='w-full flex justify-center items-center'>
				<form
					className='p-6 bg-white rounded-lg mb-6'
					style={{ width: '398px' }}
				>
					<Link href='#'>
						<a>
							<MenuClose color='#000000' className='mb-8' />
						</a>
					</Link>
					<InputFormField
						labelText='surname'
						name='surname'
						type='text'
					/>
					<InputFormField
						labelText='firstname'
						name='firstname'
						type='text'
					/>
					<InputFormField
						labelText='email'
						name='email'
						type='email'
					/>
					<SelectFormField
						labelText='department'
						optionMenu={[
							{ name: 'Teaching', value: 'teaching' },
							{ name: 'Administration', value: 'administration' },
						]}
					/>
					<SelectFormField
						labelText='gender'
						optionMenu={[
							{ name: 'Male', value: 'male' },
							{ name: 'Female', value: 'female' },
						]}
					/>
					<div className='flex justify-between'>
						<ButtonForm text='update' bgColor='#074279' />
                        <ButtonForm text='delete' bgColor='#AB2424' />
					</div>
				</form>
			</section>
		</AuthLayout>
	);
};

export default ManageEmp;
