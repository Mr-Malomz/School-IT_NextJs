import * as React from 'react';

function ExpensesIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg width={44} height={44} fill='none' {...props}>
			<circle cx={22} cy={22} r={22} fill='#2240AC' />
			<path
				d='M31.864 34H13.133a3.005 3.005 0 01-2.208-.916 3.017 3.017 0 01-.914-2.212V12.104c0-.864.305-1.597.914-2.2A3.025 3.025 0 0113.133 9h18.731c.862 0 1.598.301 2.208.904.61.603.914 1.336.914 2.2v18.768c0 .863-.304 1.6-.914 2.212-.61.61-1.346.916-2.208.916zm-9.366-3.91c0 .212.078.395.232.55a.749.749 0 00.549.232h1.561a.75.75 0 00.549-.232.752.752 0 00.232-.55v-1.564a.752.752 0 00-.232-.55.75.75 0 00-.549-.232h-1.561a.75.75 0 00-.549.232.752.752 0 00-.232.55v1.564zm0-6.256c0 .212.078.395.232.55a.75.75 0 00.549.232h1.561a.77.77 0 00.549-.22.74.74 0 00.232-.562V22.27a.752.752 0 00-.232-.55.75.75 0 00-.549-.232h-1.561a.75.75 0 00-.549.232.752.752 0 00-.232.55v1.564zm-4.682 6.256c0 .212.077.395.231.55a.75.75 0 00.55.232h1.56a.75.75 0 00.549-.232.753.753 0 00.232-.55v-1.564a.752.752 0 00-.232-.55.75.75 0 00-.549-.232h-1.56a.75.75 0 00-.55.232.752.752 0 00-.231.55v1.564zm0-6.256c0 .212.077.395.231.55a.75.75 0 00.55.232h1.56a.77.77 0 00.549-.22.741.741 0 00.232-.562V22.27a.753.753 0 00-.232-.55.75.75 0 00-.549-.232h-1.56a.75.75 0 00-.55.232.753.753 0 00-.231.55v1.564zm-4.683 6.256c0 .212.077.395.231.55a.75.75 0 00.55.232h1.56a.749.749 0 00.549-.232.752.752 0 00.232-.55v-1.564a.752.752 0 00-.232-.55.75.75 0 00-.549-.232h-1.56a.75.75 0 00-.55.232.752.752 0 00-.231.55v1.564zm0-6.256c0 .212.077.395.231.55a.75.75 0 00.55.232h1.56a.77.77 0 00.549-.22.74.74 0 00.232-.562V22.27a.752.752 0 00-.232-.55.75.75 0 00-.549-.232h-1.56a.75.75 0 00-.55.232.752.752 0 00-.231.55v1.564zm18.731-10.166c0-.424-.15-.79-.45-1.1-.302-.31-.672-.464-1.11-.464h-15.61c-.44 0-.81.154-1.11.464-.3.31-.451.676-.451 1.1v3.128c0 .44.15.81.45 1.112.302.301.672.452 1.11.452h15.61c.44 0 .81-.151 1.11-.452.301-.302.451-.672.451-1.112v-3.128zm0 8.602a.752.752 0 00-.231-.55.75.75 0 00-.55-.232h-3.121a.75.75 0 00-.549.232.752.752 0 00-.232.55v1.564a.74.74 0 00.232.562.77.77 0 00.549.22h3.122a.77.77 0 00.549-.22.74.74 0 00.231-.562V22.27zm0 4.692a.752.752 0 00-.231-.55.75.75 0 00-.55-.232h-3.121a.75.75 0 00-.549.232.752.752 0 00-.232.55v3.128c0 .212.078.395.232.55a.75.75 0 00.549.232h3.122a.75.75 0 00.549-.232.752.752 0 00.231-.55v-3.128z'
				fill='#fff'
			/>
		</svg>
	);
}

export default ExpensesIcon;