import React, { FC } from 'react';

interface ButtonProps
	extends React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	text: string;
	bgColor: string;
}

const ButtonForm: FC<ButtonProps> = ({ bgColor, text }) => {
	return (
		<button
			className='text-white font-semibold rounded-full text-sm p-2 capitalize px-10 '
			style={{ background: bgColor }}
		>
			{text}
		</button>
	);
};

export default ButtonForm;
