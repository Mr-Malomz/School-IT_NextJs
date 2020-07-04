import React, { FC } from 'react';

interface SelectProps
	extends React.DetailedHTMLProps<
		React.SelectHTMLAttributes<HTMLSelectElement>,
		HTMLSelectElement
	> {
	labelText: string;
    optionMenu: { name: string; value: string }[];
}

const SelectFormField: FC<SelectProps> = ({ labelText, optionMenu }) => {
	return (
		<div className='w-full mb-6'>
			<label
				className='text-xs capitalize block mb-2 font-semibold'
				style={{ color: 'rgba(0, 0, 0, 0.4)' }}
			>
				{labelText}
			</label>
			<select className='block border border-gray-300 w-full rounded-md h-8 pl-3'>
                <option>....</option>
				{optionMenu.map((menu) => (
					<option value={menu.value}>{menu.name}</option>
				))}
			</select>
		</div>
	);
};

export default SelectFormField;
