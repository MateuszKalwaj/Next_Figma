import React from 'react'
import Button from "@/app/components/Button";
import DragIcon from "@/app/components/icons/DragIcon";
import {PositionItem} from "@/types/types";

interface Props {
    item: PositionItem;
    onDelete: (id: number) => void;
    onEdit: (id: number) => void;
    onAdd: () => void;
}

const Position = ({item, onDelete, onEdit, onAdd}: Props) => {
    if (!item) return null;

    console.log(item)

    return (
        <div className="w-full flex-wrap gap-1 bg-white flex justify-between items-center py-4 px-6 shadow-custom-inset rounded-t-lg">
            <div className="flex items-center">
                <button className="p-5 inline">
                    <DragIcon/>
                </button>
                <div className="flex-grow">
                    <p className="font-medium text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.link}</p>
                </div>
            </div>

            <div className="w-fit flex items-center shadow-custom-inset rounded-lg h-10">
            <Button
                            onClick={() => onDelete(item?.id)}
                            classes="px-4 py-2 text-gray-700"
                            text={"Usuń"}
                        >
                        </Button>
                        <Button
                            onClick={() => onEdit(item.id)}
                            classes="px-4 py-2  text-gray-700"
                            text={"Edytuj"}
                        >
                        </Button>
                        <Button text={"Dodaj pozycje menu"} classes={""} onClick={onAdd}
                        >

                        </Button>
                    </div>
        </div>
    )
}
export default Position
