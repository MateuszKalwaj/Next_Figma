'use client';
import { inter } from '@/app/fonts/fonts';
import Header from '@/app/components/Header';
import Form from '@/app/components/Form';
import PositionList from '@/app/components/PositionList';
import { MenuProvider, useMenu } from '@/app/context/MenuContext';
import { useState } from 'react';
import {PositionItem} from "@/types/types";

const Home = () => {
    const { menuItems, addItem, editItem, deleteItem } = useMenu();
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [pathToEdit, setPathToEdit] = useState<number[] | null>(null);

    const handleNewPosition = () => {
        setIsFormOpen(true);
        setPathToEdit(null);
    };

    const handleCancel = () => {
        setIsFormOpen(false);
    };

    const handleAdd = (name: string, link: string) => {
        if (pathToEdit) {
            editItem(pathToEdit, name, link);
        } else {
            addItem([], name, link);
        }
        setIsFormOpen(false);
    };

    const findItemByPath = (items: PositionItem[], path: number[]): PositionItem | null => {
        if (path.length === 0) return null;
        const item = items.find((i) => i.id === path[0]);
        if (!item) return null;
        if (path.length === 1) return item;
        return findItemByPath(item.items, path.slice(1));
    };


    return (
        <div className={`${inter.className} w-full mx-auto px-4 py-6`}>
            <Header handleNewPosition={handleNewPosition} />
            <Form
                visible={isFormOpen}
                onCancel={handleCancel}
                onAdd={handleAdd}
                name={pathToEdit ? findItemByPath(menuItems.items, pathToEdit)?.name : ''}
                link={pathToEdit ? findItemByPath(menuItems.items, pathToEdit)?.link : ''}
            />
            <PositionList
                positions={menuItems.items}
                onDelete={deleteItem}
                onEdit={(path) => {
                    setPathToEdit(path);
                    setIsFormOpen(true);
                }}
                onAdd={(path, name, link) => addItem(path, name, link)}
            />

        </div>
    );
};

export default function App() {
    return (
        <MenuProvider>
            <Home />
        </MenuProvider>
    );
}
