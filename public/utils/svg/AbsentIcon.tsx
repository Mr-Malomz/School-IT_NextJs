import * as React from "react";

function AbsentIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={20} height={20} fill="none" {...props}>
            <path
                d="M19.375 16.25a3.134 3.134 0 01-3.125 3.125H3.75A3.134 3.134 0 01.625 16.25V3.75A3.134 3.134 0 013.75.625h12.5a3.134 3.134 0 013.125 3.125v12.5z"
                fill="#FF5A79"
            />
            <path
                d="M15.625 6.625l-2.25-2.25L10 7.75 6.625 4.375l-2.25 2.25L7.75 10l-3.375 3.375 2.25 2.25L10 12.25l3.375 3.375 2.25-2.25L12.25 10l3.375-3.375z"
                fill="#fff"
            />
        </svg>
    );
}

export default AbsentIcon;