import * as React from "react";

function EmployeeIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={25} height={25} fill="none" {...props}>
            <path
                d="M10.038 5.575c-.363 1.6.687 4.325 2.462 4.325 1.763 0 2.813-2.725 2.45-4.325-.275-1.225-1.35-2.038-2.45-2.038-1.112 0-2.175.813-2.462 2.038zM4.875 6.7c-.312 1.35.588 3.663 2.088 3.663S9.363 8.05 9.05 6.7C8.813 5.662 7.9 4.963 6.963 4.963c-.938 0-1.85.7-2.088 1.737zm11.075 0c-.312 1.35.588 3.663 2.075 3.663 1.5 0 2.4-2.313 2.088-3.663-.238-1.038-1.15-1.737-2.088-1.737-.925 0-1.837.7-2.075 1.737zm-.737 14.288l1.562-5.375c.975-3.113-.887-5.025-4.275-5.025-3.4 0-5.262 1.912-4.3 5.025l1.575 5.375c.288.9 1.475 1.512 2.725 1.512 1.225 0 2.425-.613 2.713-1.512zM7.588 11.45c-.613.838-1.2 2.288-.525 4.488l1.4 4.737a3.01 3.01 0 01-1.5.387c-1.063 0-2.063-.512-2.313-1.287l-1.337-4.562c-.813-2.638.762-4.25 3.65-4.25.337 0 .675.025.987.075-.125.124-.25.274-.362.412zm10.437-.487c2.888 0 4.475 1.612 3.65 4.25l-1.337 4.562c-.25.775-1.25 1.288-2.313 1.288a3.01 3.01 0 01-1.5-.388l1.388-4.713c.687-2.224.1-3.675-.525-4.512a3.598 3.598 0 00-.35-.412 6.21 6.21 0 01.987-.075z"
                fill="#fff"
            />
        </svg>
    );
}

export default EmployeeIcon;