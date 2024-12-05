import React, { useState } from 'react';
import Button from "@/app/components/Button";
import type { PositionItem } from "@/types/types";
import Form from './Form';
import Position from './Position';

interface Props {
    item: PositionItem;
    path: number[];
    onDelete: (path: number[]) => void;
    onEdit: (path: number[]) => void;
    onAdd: (path: number[], name: string, link: string) => void;
}

const Card = ({ item, path, onDelete, onEdit, onAdd }: Props) => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const currentPath = [...path, item.id];

    const handleAddNested = (name: string, link: string) => {
        onAdd(currentPath, name, link);
        setIsFormOpen(false);
    };

    return (
        <li className="rounded-lg shadow-custom-inset bg-gray-200">
            <Position
                item={item}
                onDelete={() => onDelete(currentPath)}
                onEdit={() => onEdit(currentPath)}
                onAdd={() => setIsFormOpen(true)}
            />
            <div className="w-full">
                <ul className="mt-4">
                    {item.items.map((nestedItem) => (
                        <Card
                            key={nestedItem.id}
                            item={nestedItem}
                            path={currentPath}
                            onDelete={onDelete}
                            onEdit={onEdit}
                            onAdd={onAdd}
                        />
                    ))}
                </ul>
                <div className="py-5 px-6">
                    {isFormOpen && (
                        <Form
                            visible={isFormOpen}
                            onCancel={() => setIsFormOpen(false)}
                            onAdd={handleAddNested}
                            name=""
                            link=""
                        />
                    )}
                    {!isFormOpen && (
                        <Button
                            text="Dodaj pozycję menu"
                            classes="bg-white"
                            onClick={() => setIsFormOpen(true)}
                        />
                    )}
                </div>
            </div>
        </li>
    );
};

export default Card;