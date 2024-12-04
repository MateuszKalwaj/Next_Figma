import { ForwardedRef, forwardRef } from 'react'

interface Props {
    value: string,
    id: string
}

const InputText = forwardRef<HTMLInputElement, Props>(({ value, id }: Props, ref: ForwardedRef<HTMLInputElement>) => {
    return (
        <div className="space-y-2">
            <label className="text-[#344054]" htmlFor={id}>Nazwa</label>
            <input
                type="text"
                defaultValue={value}
                ref={ref}
                // onChange={(e) => onChange(e)}
                className="px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm  text-[#667085]"
                placeholder="np. Promocje"
                id={id}
            />
        </div>
    )
});

export default InputText;
InputText.displayName = 'InputText';
