import * as React from "react";

function ArrowUp(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={10} height={16} style={{ display: 'inline-block', marginLeft: '5px' }} fill="none" {...props}>
            <g clipPath="url(#prefix__clip0)">
                <path
                    d="M5.531 4.99l4.25 4.25a.747.747 0 010 1.06l-.706.706a.747.747 0 01-1.06 0L5.004 7.994l-3.012 3.012a.747.747 0 01-1.06 0L.225 10.3a.747.747 0 010-1.06l4.25-4.25a.743.743 0 011.056 0z"
                    fill="#000"
                />
            </g>
            <defs>
                <clipPath id="prefix__clip0">
                    <path fill="#fff" transform="rotate(-180 5 8)" d="M0 0h10v16H0z" />
                </clipPath>
            </defs>
        </svg>
    );
}

export default ArrowUp;