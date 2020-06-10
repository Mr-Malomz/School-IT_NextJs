import * as React from "react";

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={25} height={25} fill="none" {...props}>
            <path
                d="M.667.5h24v4h-24v-4zm6 10h18v4h-18v-4zm7.5 10h10.5v4h-10.5v-4z"
                fill="#000"
            />
        </svg>
    );
}

export default MenuIcon;