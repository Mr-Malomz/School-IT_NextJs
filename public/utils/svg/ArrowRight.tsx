import React from 'react';

const ArrowRight = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width='16'
			height='10'
			viewBox='0 0 16 10'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<g clip-path='url(#clip0)'>
				<path
					d='M11.0094 5.53124L6.75937 9.78124C6.46563 10.075 5.99062 10.075 5.7 9.78124L4.99375 9.07499C4.7 8.78124 4.7 8.30624 4.99375 8.01562L8.00625 5.00312L4.99375 1.99062C4.7 1.69687 4.7 1.22187 4.99375 0.931244L5.7 0.224995C5.99375 -0.0687551 6.46875 -0.0687551 6.75937 0.224995L11.0094 4.47499C11.3031 4.76249 11.3031 5.23749 11.0094 5.53124Z'
					fill='black'
				/>
			</g>
			<defs>
				<clipPath id='clip0'>
					<rect
						width='10'
						height='16'
						fill='white'
						transform='translate(0 10) rotate(-90)'
					/>
				</clipPath>
			</defs>
		</svg>
	);
};

export default ArrowRight;
