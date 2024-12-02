'use client';
import { useState } from "react";


interface Props {
    visible: boolean,
    onCancel: () => void,
    onAdd: (name: string, link: string) => void
}

const Form = ({ visible, onCancel, onAdd }: Props) => {
    const [name, setName] = useState("");
    const [link, setLink] = useState("");

    const handleAdd = () => {
        onAdd(name, link);
        setName("");
        setLink("");
    };

    return visible ? (<div
        className="bg-[#FFF] border-[#D0D5DD] rounded-[8px] p-4 shadow-md mx-auto mt-8 flex flex-col justify-between">
        <div className="flex flex-col gap-[8px]">
            <div className="flex flex-col gap-[6px]">
                <label htmlFor="nazwa">Nazwa</label>
                <input
                    id="nazwa"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700"
                    placeholder="np. Promocje"
                />
            </div>

            <div className="flex flex-col gap-[6px]">
                <label htmlFor="nazwa">Link</label>
                <input
                    type="text"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    className="pl-10 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700  bg-[url('/lupa.png')] bg-no-repeat bg-left bg-[length:15px_15px]"
                    placeholder=" Wklej lub wyszukaj"

                />
            </div>
        </div>

        <div className="flex justify-start gap-2 px-[8px] ">
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
                Dodaj
            </button>
        </div>
    </div>) : null
};

export default Form;