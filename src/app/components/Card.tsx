import React from 'react'
import Button from "@/app/components/Button";
import type { PositionItem} from "@/types/types";
import Position from './Position'

interface Props {
    item: PositionItem,
    onDelete: (id: number) => void;
    onEdit: (id: number) => void;
    onAdd: () => void;
}

const Card = ({item, onDelete, onEdit, onAdd}: Props) => {
    return (
        <li
            className="rounded-lg shadow-custom-inset bg-gray-200"
        >
            <Position item={item} onDelete={onDelete} onEdit={onEdit} onAdd={onAdd} key={item.id} />
            <div className=" w-full">
                <div className="py-5 px-6 ">
                    <Button text={"Dodaj pozycje menu"} classes={"bg-white"} onClick={onAdd} />
                </div>
            </div>
        </li>
    )
}
export default Card
