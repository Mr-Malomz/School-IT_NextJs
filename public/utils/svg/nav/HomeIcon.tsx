import * as React from "react";

function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={25} height={25} fill="none" {...props}>
            <path
                d="M20 10.625l1.912 1.912-1.325 1.325L12.5 5.776l-8.088 8.088-1.325-1.325L12.5 3.124l5 5v-2.5H20v5zM12.5 7.55l7.5 7.487V22.5H5v-7.463l7.5-7.487zm2.5 13.7V15h-5v6.25h5z"
                fill="#fff"
            />
        </svg>
    );
}

export default HomeIcon;