import React from 'react';
import AuthLayout from '../../components/AuthLayout';
import SelectFormField from '../../components/SelectFormField';
import Link from 'next/link';
import MenuClose from '../../public/utils/svg/MenuClose';
import InputFormField from '../../components/InputFormField';
import ButtonForm from '../../components/ButtonForm';

const CreateExpenses = () => {
	return (
		<AuthLayout pageTitle='Create Expenses'>
			<h3 className='text-2xl font-semibold  mb-6'>
				Create a new expense
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
					<InputFormField labelText='name' name='name' type='text' />
					<InputFormField
						labelText='description'
						name='description'
						type='text'
					/>
					<SelectFormField
						labelText='department'
						optionMenu={[
							{ name: 'Teaching', value: 'teaching' },
							{ name: 'Administration', value: 'administration' },
						]}
					/>
					<InputFormField
						labelText='amount'
						name='amount'
						type='number'
					/>
					<div className='w-full mb-6'>
						<label
							className='text-xs capitalize block mb-2 font-semibold'
							style={{ color: 'rgba(0, 0, 0, 0.4)' }}
						>
							details
						</label>
						<textarea
							className='appearance-none border border-gray-300 w-full rounded-md  pl-3'
							name='details'
							rows={4}
						/>
					</div>
					<ButtonForm
						text='create'
						bgColor='#074279'
						width='w-full'
					/>
				</form>
			</section>
		</AuthLayout>
	);
};

export default CreateExpenses;
