import React, { FC } from 'react';
import Link from 'next/link';

interface LinkProps {
	text: string;
	href: string;
}

const LinkOutline: FC<LinkProps> = ({ href, text }) => {
	return (
		<Link href={href}>
            <a className='font-semibold capitalize flex items-center justify-center py-1 h-12 mb-3 border-2 border-white w-64 text-white rounded-full text-center hover:bg-brand-main-hover '>
				{text}
			</a>
		</Link>
	);
};

export default LinkOutline;
