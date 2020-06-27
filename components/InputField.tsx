import React, { FC } from 'react';

interface InputProps extends React.DetailedHTMLProps < React.InputHTMLAttributes < HTMLInputElement >, HTMLInputElement >{
	placeholder: string;
	name: string;
	type: string;
}

const InputField: FC<InputProps> = ({ name, placeholder, type }) => {
	return (
		<input
			className='appearance-none border mb-8 border-brand-main border-opacity-75 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none'
			name={name}
			type={type}
			placeholder={placeholder}
		/>
	);
};

export default InputField;
