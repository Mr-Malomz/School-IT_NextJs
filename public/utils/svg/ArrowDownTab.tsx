import React from 'react';

const ArrowDownTab = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width='10'
			height='16'
			viewBox='0 0 10 16'
			fill='none'
            xmlns='http://www.w3.org/2000/svg'
            {...props}
		>
			<g clip-path='url(#clip0)'>
				<path
					d='M4.46836 11.0094L0.218359 6.75937C-0.0753906 6.46563 -0.0753906 5.99062 0.218359 5.7L0.924609 4.99375C1.21836 4.7 1.69336 4.7 1.98398 4.99375L4.99648 8.00625L8.00898 4.99375C8.30273 4.7 8.77773 4.7 9.06836 4.99375L9.77461 5.7C10.0684 5.99375 10.0684 6.46875 9.77461 6.75937L5.52461 11.0094C5.23711 11.3031 4.76211 11.3031 4.46836 11.0094Z'
					fill='black'
				/>
			</g>
			<defs>
				<clipPath id='clip0'>
					<rect width='10' height='16' fill='white' />
				</clipPath>
			</defs>
		</svg>
	);
};

export default ArrowDownTab;
