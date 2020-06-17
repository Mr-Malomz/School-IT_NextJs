import React, { FC } from 'react';
import Link from 'next/link';

interface LinkProps {
	text: string;
	href: string;
}

const LinkButton: FC<LinkProps> = ({ href, text }) => {
	return (
		<Link href={href}>
			<a className='block font-medium capitalize flex items-center justify-center py-1 mt-8 h-12 mb-3 bg-brand-main w-64 text-white rounded-full text-center hover:bg-brand-main-hover lg:mr-8'>
				{text}
			</a>
		</Link>
	);
};

export default LinkButton;
