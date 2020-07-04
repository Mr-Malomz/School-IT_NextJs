import React, { FC } from 'react';

interface InputProps
	extends React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	type: string;
	name: string;
	labelText: string;
}

const InputFormField: FC<InputProps> = ({ name, type, labelText }) => {
	return (
		<div className='w-full mb-6'>
			<label
				className='text-xs capitalize block mb-2 font-semibold'
				style={{ color: 'rgba(0, 0, 0, 0.4)' }}
			>
				{labelText}
			</label>
			<input
				className='appearance-none border border-gray-300 w-full rounded-md h-8 pl-3'
				name={name}
				type={type}
			/>
		</div>
	);
};

export default InputFormField;
