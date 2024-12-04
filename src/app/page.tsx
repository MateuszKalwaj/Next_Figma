'use client';
import {inter} from "@/app/fonts/fonts";
import {MainPosition, PositionItem} from "@/types/types";
import Header from "@/app/components/Header";
import {useEffect, useState} from "react";
import Form from "@/app/components/Form";
import PositionList from "@/app/components/PositionList";

const Home = () => {

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [menuItems, setMenuItems] = useState<MainPosition>({items: []});
    const [itemInEdit, setItemInEdit] = useState<PositionItem | null>(null);

    const handleNewPosition = () => {
        setIsFormOpen(true)
    }

    const handleCancel = () => {
        setIsFormOpen(false);
        console.log(itemInEdit)
        if (itemInEdit) {
            setItemInEdit(null);
        }
    };

    const handleAdd = (name: string, link: string) => {

        if (itemInEdit) {
            console.log('this case');
            itemInEdit.name = name;
            itemInEdit.link = link;
            setItemInEdit(null);
        } else {
            const newItem: PositionItem = {id: Date.now(), link, name, items: []};
            const newItemsArray = [...menuItems.items, newItem];
            setMenuItems({items: newItemsArray});
        }
        setIsFormOpen(false);
    };

    const handleDelete = (id: number) => {
        const itemToDelete = matchItems(menuItems.items, id);
        console.log(itemToDelete);
        const newMenuItems = [...menuItems.items].filter(item => itemToDelete !== item);
        setMenuItems({items: newMenuItems});
    };

    const matchItems = (items: PositionItem[], searchedId: number): PositionItem | null => {
        if (!items.length) {
            return null;
        }
        let searchedItem = items.find(item => item.id === searchedId);
        if (searchedItem) {
            return searchedItem;
        }
        searchedItem = items.find(item => item.items && Array.isArray(item.items) && matchItems(item.items, searchedId));

        return searchedItem || null;
    };

    const handleEdit = (id: number) => {
        const itemToEdit = matchItems(menuItems.items, id);
        if (itemToEdit) {
            setItemInEdit(itemToEdit);
            setIsFormOpen(true);
        }
    };

    const handleAddPosition = () => {
        setIsFormOpen(true);
    };

    useEffect(() => {
        console.log(menuItems)
    })

    return (
        <div className={`${inter.className} w-full mx-auto px-4 py-6`}>
            <Header handleNewPosition={handleNewPosition}/>
            <Form
                visible={isFormOpen}
                onCancel={handleCancel}
                onAdd={handleAdd}
                name={itemInEdit ? itemInEdit.name : ""}
                link={itemInEdit ? itemInEdit.link : ""}
            />
            <PositionList positions={menuItems.items}
                          onDelete={handleDelete}
                          onEdit={handleEdit}
                          onAdd={handleAddPosition} />
        </div>
    );
}

export default Home;
