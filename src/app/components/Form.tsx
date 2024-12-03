'use client';
import {useEffect, useState} from "react";
import SearchIcon from "@/app/components/icons/SearchIcon";


interface Props {
    visible: boolean,
    onCancel: () => void,
    onAdd: (name: string, link: string) => void
    initialName?: string;
    initialLink?: string;
}

const Form = ({ visible, onCancel, onAdd, initialName = "", initialLink = "" }: Props) => {
    const [name, setName] = useState("");
    const [link, setLink] = useState("");

    useEffect(() => {
        setName(initialName);
        setLink(initialLink);
    }, [initialName, initialLink]);

    const handleAdd = () => {
        onAdd(name, link);
        setName("");
        setLink("");
    };

    return visible ? (<div
        className="bg-[#FFF] border-[#D0D5DD] rounded-lg gap-5 p-4 shadow-md mx-auto mt-8 flex flex-col justify-between">
        <div className="flex flex-col gap-2 px-6 pt-5">
            <div className="flex flex-col gap-1.5 leading-5">
                <label htmlFor="nazwa">Nazwa</label>
                <input
                    id="nazwa"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 h-10"
                    placeholder="np. Promocje"
                />
            </div>

            <div className="flex flex-col gap-1.5">
                <label htmlFor="nazwa">Link</label>
                <div className="relative leading-5">
                    <input
                        type="search"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        className="pr-3 pl-8 py-2 w-full border border-gray-300 rounded-md shadow-sm text-gray-700"
                        placeholder=" Wklej lub wyszukaj"

                    />
                    <div className="absolute top-2 left-2 h-5 w-5">
                        <SearchIcon />
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-start px-6 gap-2">
            <button
                onClick={onCancel}
                className="rounded-[8px] border border-[#D0D5DD] px-3.5 py-2.5"
            >
                Anuluj
            </button>
            <button
                onClick={handleAdd}
                className="rounded-[8px] border border-[#D0D5DD] text-droplo-purple px-3.5 py-2.5"
            >
                {initialName ? "Zapisz" : "Dodaj"}
            </button>
        </div>
    </div>) : null
};

export default Form;