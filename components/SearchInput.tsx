import React, { FC } from 'react';

interface SearchProps
	extends React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	placeholder: string;
}

const SearchInput: FC<SearchProps> = ({ placeholder }) => {
	return (
		<input
			type='search'
			className='w-full rounded-md h-8 pl-3 border border-gray-300 text-sm mb-6 lg:mb-0 lg:mr-6'
			placeholder={placeholder}
		/>
	);
};

export default SearchInput;
