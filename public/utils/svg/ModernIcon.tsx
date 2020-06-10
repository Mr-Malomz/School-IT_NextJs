import * as React from 'react';

function ModernIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg width={42} height={40} fill='none' {...props}>
			<g clipPath='url(#prefix__clip0)'>
				<path
					d='M34.516 30c1.865 0 3.375-1.5 3.375-3.333L37.907 10c0-1.833-1.526-3.333-3.39-3.333H7.386c-1.866 0-3.392 1.5-3.392 3.333v16.667C3.995 28.5 5.521 30 7.387 30H.604v3.333H41.3V30h-6.783zM7.386 10h27.13v16.667H7.386V10z'
					fill='#6B64D7'
				/>
			</g>
			<defs>
				<clipPath id='prefix__clip0'>
					<path
						fill='#fff'
						transform='translate(.604)'
						d='M0 0h40.694v40H0z'
					/>
				</clipPath>
			</defs>
		</svg>
	);
}

export default ModernIcon;
