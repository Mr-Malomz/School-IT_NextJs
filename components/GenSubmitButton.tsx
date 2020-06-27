import React, { FC } from 'react';

interface ButtonProps
	extends React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	text: string;
}

const GenSubmitButton: FC<ButtonProps> = ({ text }) => {
	return (
		<button className='font-semibold capitalize flex items-center justify-center py-1 h-12 mb-3 bg-brand-main w-64 text-white rounded-full text-center hover:bg-brand-main-hover lg:mr-8'>
			{text}
		</button>
	);
};

export default GenSubmitButton;
