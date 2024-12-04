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

const PositionList = ({items, onDelete, onEdit, onAdd}: Props) => {
    return (
        <div className="mx-auto mt-8 ">
            <ul className="">
                {items.length > 0 ? (
                    items.map((item, index) => (

                            <li
                                key={index}
                                className="flex justify-between items-center p-6 px-8 shadow-custom-inset"
                            >
                                <div className="flex flex-col gap-1">
                                    <span className="font-medium text-gray-800">{item.name}</span>
                                    <span className="text-sm text-gray-600">{item.link}</span>
                                </div>

                                <div className="flex shadow-custom-inset">
                                    <Button
                                        onClick={() => onDelete(item.id)}
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