import * as React from "react";

function ArrowDown(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={10} height={16} style={{display: 'inline-block', marginLeft: '5px'}} fill="none" {...props}>
            <g clipPath="url(#prefix__clip0)">
                <path
                    d="M4.469 11.01L.219 6.76a.747.747 0 010-1.06l.706-.706a.747.747 0 011.06 0l3.012 3.012 3.012-3.012a.747.747 0 011.06 0l.706.706a.747.747 0 010 1.06l-4.25 4.25a.743.743 0 01-1.056 0z"
                    fill="#000"
                />
            </g>
            <defs>
                <clipPath id="prefix__clip0">
                    <path fill="#fff" d="M0 0h10v16H0z" />
                </clipPath>
            </defs>
        </svg>
    );
}

export default ArrowDown;