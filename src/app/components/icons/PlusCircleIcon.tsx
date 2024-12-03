interface Props {
    strokeColor?: string;
}


const PlusCircleIcon = ({strokeColor = '#FFFFFF'}: Props) => (
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
            d="M12 8v8m-4-4h8m6 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
        ></path>
    </svg>
);

export default PlusCircleIcon;
