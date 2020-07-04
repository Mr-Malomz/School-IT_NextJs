import React, { FC } from 'react';
import PlusIcon from '../public/utils/svg/PlusIcon';
import Link from 'next/link';

interface LinkProps {
	text: string;
	hrefLink: string;
}

const AuthLinkButton: FC<LinkProps> = ({ text, hrefLink }) => {
	return (
		<Link href={hrefLink}>
			<a className='bg-btn-sec w-56 p-2 text-center hover:bg-blue-900 rounded-full text-white capitalize text-sm font-semibold'>
				<PlusIcon /> <span>{text}</span>
			</a>
		</Link>
	);
};

export default AuthLinkButton;
