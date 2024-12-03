import {ChangeEvent} from "react";

interface Props {
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    id: string
}

const InputText = ({value, onChange, id}: Props) => {
    return (
        <div className="space-y-2">
            <label className="text-[#344054]" htmlFor={id}>Nazwa</label>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e)}
                className="px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm  text-[#667085]"
                placeholder="np. Promocje"
                id={id}
            />
        </div>
    )
}
export default InputText
