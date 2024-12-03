'use client';

import PlusCircleIcon from "@/app/components/icons/PlusCircleIcon";

interface Props {
    handleNewPosition: () => void;
}

const Header = ({handleNewPosition}: Props) => {

    return (
        <div
            className="bg-[#F9FAFB] flex flex-col items-center justify-center mx-2 px-4 py-6 rounded-md">
            <div className="flex flex-col items-center justify-center text-center ">
                <h1 className="text-xl font-semibold">Menu jest puste</h1>
                <p className="text-gray-600 mt-2">W tym menu nie ma jeszcze żadnych linków</p>
            </div>
            <button onClick={() => handleNewPosition()}
                    className="leading-5 bg-[#7F56D9] rounded-[10px] text-white px-3.5 py-2.5 mt-4 flex items-center justify-center gap-2 text-sm font-semibold"
            >
                <PlusCircleIcon />
                <span>Dodaj pozycję menu</span>
            </button>

        </div>
    );
};

export default Header;