import * as React from 'react';

function MenuClose(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg width={24} height={24} fill='none' {...props}>
			<path
				d='M14.994 12l8.38-8.38A2.119 2.119 0 0020.38.621L12 9.001 3.62.62a2.12 2.12 0 10-2.999 3L9.001 12 .62 20.38a2.12 2.12 0 103 2.999L12 14.999l8.38 8.38a2.12 2.12 0 002.999-3L14.994 12z'
				fill={props.color}
			/>
		</svg>
	);
}

export default MenuClose;
