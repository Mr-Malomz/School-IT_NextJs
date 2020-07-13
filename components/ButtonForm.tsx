import React, { FC } from 'react';

interface ButtonProps
	extends React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	text: string;
	bgColor: string;
	width?: string;
}

const ButtonForm: FC<ButtonProps> = ({ bgColor, text, width }) => {
	return (
		<button
			className={`focus:outline-none text-white font-semibold rounded-full text-sm p-2 capitalize px-10 ${width}`}
			style={{ background: bgColor }}
		>
			{text}
		</button>
	);
};

export default ButtonForm;
