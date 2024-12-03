import {ChangeEvent} from "react";
import SearchIcon from "@/app/components/icons/SearchIcon";

interface Props {
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    id: string
}

const InputSearch = ({value, onChange, id}: Props) => {
    return (
        <div className="space-y-1.5">
            <label className="text-[#344054]" htmlFor={id}>Link</label>
            <div className="relative">
                <input
                    type="search"
                    value={value}
                    onChange={(e) => onChange(e)}
                    className="pr-3 pl-8 py-2 w-full border border-gray-300 rounded-md shadow-sm text-[#667085] h-10"
                    placeholder=" Wklej lub wyszukaj"
                    id={id}

                />
                <div className="absolute top-2.5 left-2 h-5 w-5">
                    <SearchIcon/>
                </div>
            </div>
        </div>
    )
}
export default InputSearch
