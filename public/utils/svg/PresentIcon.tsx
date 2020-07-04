import * as React from "react";

function PresentIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={20} height={20} fill="none" {...props}>
            <path
                d="M10 19.375a9.375 9.375 0 100-18.75 9.375 9.375 0 100 18.75z"
                fill="#4BD37B"
            />
            <path
                d="M14.375 4.375l-6.563 6.75-2.187-2.25-2.188 2.25 4.376 4.5 8.75-9-2.188-2.25z"
                fill="#fff"
            />
        </svg>
    );
}

export default PresentIcon;