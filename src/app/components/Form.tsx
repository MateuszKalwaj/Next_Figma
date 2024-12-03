'use client';
import {useEffect, useState} from "react";
import InputText from "@/app/components/InputText";
import InputSearch from "@/app/components/InputSearch";
import Button from "@/app/components/Button";
import TrashIcon from "@/app/components/icons/TrashIcon";

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
        className="bg-[#FFF] shadow-[inset_0px_0px_0px_1px_#D0D5DD] rounded-lg mx-auto mt-8 pb-5 space-y-5 w-full">
        <div className="flex flex-row px-6 pt-5 gap-4">
            <div className="w-full leading-5 space-y-2">
                <InputText value={name} id="name" onChange={(e) => setName(e.target.value)} />
                <InputSearch value={link} id="link" onChange={(e) => setLink(e.target.value)} />
            </div>
            <div>
                <button className="h-10 w-10 p-2.5">
                    <TrashIcon />
                </button>
            </div>
        </div>
        <div className="flex justify-start px-6 gap-2">
            <Button onClick={onCancel} text="Anuluj" classes="shadow-[inset_0px_0px_0px_1px_#D0D5DD]"/>
            <Button onClick={handleAdd} text={initialName ? "Zapisz" : "Dodaj"} classes="text-droplo-purple shadow-[inset_0px_0px_0px_1px_#D6BBFB]"/>
        </div>
    </div>) : null
};

export default Form;