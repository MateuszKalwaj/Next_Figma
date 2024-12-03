import {ChangeEvent} from "react";

interface Props {
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
}

const InputText = ({value, onChange}: Props) => {
    return (
        <div className="space-y-2">
            <label htmlFor="nazwa">Nazwa</label>
            <input
                id="nazwa"
                type="text"
                value={value}
                onChange={(e) => onChange(e)}
                className="px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm text-gray-700"
                placeholder="np. Promocje"
            />
        </div>
    )
}
export default InputText
