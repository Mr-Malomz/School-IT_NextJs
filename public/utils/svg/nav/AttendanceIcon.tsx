import * as React from "react";

function AttendanceIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={25} height={25} fill="none" {...props}>
            <path
                d="M15 2.5l5 5v15H5v-20h10zm-1.25 5V3.75h-7.5V7.5h7.5zM10 10V8.75H6.25V10H10zm3.75 0V8.75h-2.5V10h2.5zm5 0V8.75H15V10h3.75zM10 12.5v-1.25H6.25v1.25H10zm3.75 0v-1.25h-2.5v1.25h2.5zm5 0v-1.25H15v1.25h3.75zM10 15v-1.25H6.25V15H10zm3.75 0v-1.25h-2.5V15h2.5zm5 0v-1.25H15V15h3.75zM10 17.5v-1.25H6.25v1.25H10zm3.75 0v-1.25h-2.5v1.25h2.5zm5 0v-1.25H15v1.25h3.75zM10 20v-1.25H6.25V20H10zm3.75 0v-1.25h-2.5V20h2.5z"
                fill="#fff"
            />
        </svg>
    );
}

export default AttendanceIcon;