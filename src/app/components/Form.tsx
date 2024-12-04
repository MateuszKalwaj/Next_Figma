'use client';
import { useRef} from "react";
import InputText from "@/app/components/InputText";
import InputSearch from "@/app/components/InputSearch";
import Button from "@/app/components/Button";
import TrashIcon from "@/app/components/icons/TrashIcon";

interface Props {
    visible: boolean,
    onCancel: () => void,
    onAdd: (name: string, link: string) => void
    name?: string;
    link?: string;
}

const Form = ({ visible, onCancel, onAdd, name = "", link = ""}: Props) => {
    const nameRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);

    const handleAdd = () => {
        const name = nameRef.current?.value ?? '';
        const link = linkRef.current?.value ?? '';
        console.log(name, link)
        onAdd(name, link);
    };

    const handleDelete = () => {
        onCancel();
    };

    return visible ? (<div
        className="bg-[#FFF] shadow-custom-inset rounded-lg mx-auto mt-8 pb-5 space-y-5 w-full">
        <div className="flex flex-row px-6 pt-5 gap-4">
            <div className="w-full leading-5 space-y-2">
                <InputText ref={nameRef} value={name} id="name" />
                <InputSearch ref={linkRef} value={link} id="link"/>
            </div>
            <div>
                <button className="h-10 w-10 p-2.5" onClick={handleDelete}>
                    <TrashIcon />
                </button>
            </div>
        </div>
        <div className="flex justify-start px-6 gap-2">
            <Button onClick={onCancel} text="Anuluj" classes="shadow-custom-inset"/>
            <Button onClick={handleAdd} text={name ? "Zapisz" : "Dodaj"} classes="text-droplo-purple shadow-custom-inset"/>
        </div>
    </div>) : null
};

export default Form;