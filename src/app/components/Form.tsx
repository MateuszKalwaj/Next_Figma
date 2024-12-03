'use client';
import {useEffect, useState} from "react";
import InputText from "@/app/components/InputText";
import InputSearch from "@/app/components/InputSearch";
import Button from "@/app/components/Button";

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
        className="bg-[#FFF] border border-[#D0D5DD] rounded-lg shadow-md mx-auto mt-8 gap-5 pb-5 flex flex-col justify-between">
        <div className="flex flex-row px-6 pt-5 gap-4">
            <div className="w-full flex flex-col gap-2 leading-5">
                <InputText value={name} onChange={(e) => setName(e.target.value)} />
                <InputSearch value={link} onChange={(e) => setLink(e.target.value)} />
            </div>
            <div>
                <button className="h-10 w-10">Bin</button>
            </div>
        </div>
        <div className="flex justify-start px-6 gap-2 h-10">
            <Button onClick={onCancel} text="Anuluj" classes="border-[#D0D5DD]"/>
            <Button onClick={handleAdd} text={initialName ? "Zapisz" : "Dodaj"} classes="border-[#D6BBFB] text-droplo-purple"/>
        </div>
    </div>) : null
};

export default Form;