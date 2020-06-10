import * as React from 'react';

function WellIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg width={42} height={40} fill='none' {...props}>
			<g clipPath='url(#prefix__clip0)'>
				<g clipPath='url(#prefix__clip1)'>
					<path
						d='M30.616 9.167c.9 0 1.762-.352 2.398-.977a3.305 3.305 0 00.993-2.357c0-.884-.357-1.732-.993-2.357a3.421 3.421 0 00-2.398-.976c-.9 0-1.762.351-2.398.976a3.305 3.305 0 00-.993 2.357c0 .884.357 1.732.993 2.357a3.421 3.421 0 002.398.977zm-6.104 23.166L26.208 25l3.56 3.333v10h3.392v-12.5L29.599 22.5l1.017-5a12.397 12.397 0 004.206 3.073 12.594 12.594 0 005.12 1.094v-3.334a8.457 8.457 0 01-4.191-1.038 8.279 8.279 0 01-3.1-2.962l-1.696-2.666A3.506 3.506 0 0028.073 10c-.509 0-.848.167-1.357.167L17.9 13.833v7.834h3.392V16l3.052-1.167-2.713 13.5-8.309-1.666L12.643 30l11.87 2.333zM9.422 15a1.71 1.71 0 01-1.2-.488 1.652 1.652 0 01-.496-1.179c0-.442.178-.866.496-1.178a1.71 1.71 0 011.2-.488h5.086V15H9.421zm1.695-6.667a1.71 1.71 0 01-1.2-.488 1.652 1.652 0 01-.496-1.178c0-.442.179-.866.497-1.179A1.71 1.71 0 0111.117 5h8.478v3.333h-8.478zM7.726 21.667a1.71 1.71 0 01-1.2-.489A1.652 1.652 0 016.03 20c0-.442.179-.866.497-1.178a1.71 1.71 0 011.199-.489h6.782v3.334H7.726z'
						fill='#6B64D7'
					/>
				</g>
			</g>
			<defs>
				<clipPath id='prefix__clip0'>
					<path
						fill='#fff'
						transform='translate(.604)'
						d='M0 0h40.694v40H0z'
					/>
				</clipPath>
				<clipPath id='prefix__clip1'>
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

export default WellIcon;
