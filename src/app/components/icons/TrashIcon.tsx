interface Props {
    strokeColor?: string;
}

const TrashIcon = ({strokeColor = '#475467'}: Props) => (
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
            d="M9 3h6M3 6h18m-2 0-.701 10.52c-.105 1.578-.158 2.367-.499 2.965a3 3 0 0 1-1.298 1.215c-.62.3-1.41.3-2.993.3h-3.018c-1.582 0-2.373 0-2.993-.3A3 3 0 0 1 6.2 19.485c-.34-.598-.394-1.387-.499-2.966L5 6m5 4.5v5m4-5v5"
        ></path>
    </svg>
);

export default TrashIcon;
