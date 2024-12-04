'use client';

import Button from "./Button";

interface MenuItem {
    id: number;
    name: string;
    link: string;
}

interface Props {
    items: MenuItem[];
    onDelete: (index: number) => void;
    onEdit: (index: number) => void;
    onAdd: () => void;
}

const PositionList = ({ items, onDelete, onEdit, onAdd }: Props) => {
    return (
        <div className="mx-auto mt-8 ">
            <ul className="">
                {items.length > 0 ? (
                    items.map((item, index) => (
                        <li
                            key={index}
                            className="flex justify-between items-center p-6 px-8 shadow-[inset_0px_0px_0px_1px_#D0D5DD]"
                        >
                            <div className="flex flex-col gap-1">
                                <span className="font-medium text-gray-800">{item.name}</span>
                                <span className="text-sm text-gray-600">{item.link}</span>
                            </div>

                            <div className="flex gap-4">
                                <Button
                                    onClick={() => onDelete(item.id)}
                                    classes="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
                                    text={"Usuń"}
                                >
                                </Button>
                                <Button
                                    onClick={() => onEdit(item.id)}
                                    classes="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
                                    text={"Edytuj"}
                                >
                                </Button>
                                <Button text={"Dodaj pozycje menu"} classes={"shadow-[inset_0px_0px_0px_1px_#D0D5DD]"} onClick={onAdd}
                                >

                                </Button>
                            </div>
                        </li>
                    ))
                ) : (
                    <p className="text-center text-gray-500">Brak pozycji</p>
                )}
            </ul>
        </div>
    );
};


export default PositionList;