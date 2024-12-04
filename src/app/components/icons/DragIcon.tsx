interface Props {
    strokeColor?: string;
}

const DragIcon = ({strokeColor = '#475467'}: Props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 24 24"
    >
        <path
            stroke={strokeColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m5 9-3 3m0 0 3 3m-3-3h20M9 5l3-3m0 0 3 3m-3-3v20m3-3-3 3m0 0-3-3M19 9l3 3m0 0-3 3"
        ></path>
    </svg>
);

export default DragIcon;
