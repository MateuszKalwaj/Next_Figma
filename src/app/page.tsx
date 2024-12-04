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
    const [editingId, setEditingId] = useState<number | null>(null);

    const handleNewPosition = () => {
        setIsFormOpen(true)
        setEditingId(null);
    }

    const handleCancel = () => {
        setIsFormOpen(false);
    };

    const handleAdd = (name: string, link: string) => {

        if (editingId !== null) {
            // setMenuItems((prev) =>
            //     prev.map((item) =>
            //         item.id === editingId ? { ...item, name, link } : item
            //     )
            // );
        } else {
            const newItem: PositionItem = {id: Date.now(), link, name, items: []};
            const newItemsArray = [...menuItems.items, newItem];
            setMenuItems({items: newItemsArray});
        }
        setIsFormOpen(false);
        setEditingId(null);
    };

    const handleDelete = (id: number) => {
        // setMenuItems((prev) => prev.filter((item) => item.id !== id));
        // setEditingId(null);
    };

    // const matchItems: PositionItem | null = (items: PositionItem[], searchedId: number) => {
    //     if (!items) {
    //         return null;
    //     }
    //     let searchedItem = items.find(item => item.id === searchedId);
    //     if (searchedItem) {
    //         return searchedItem;
    //     }
    //     searchedItem = items.find((item) => {
    //         return matchItems(item.items, searchedId);
    //     })
    //     return searchedItem ? searchedItem : null;
    // }

    const findItemToEdit = (id: number) => {
        // return matchItems(menuItems, id);
        // return menuItems.find((menuItem) => {
        //     console.log(menuItem);
        //     return menuItem.id === id
        // });
    }

    const handleEdit = (id: number) => {
        console.log('Hanle Edit')
        console.log(id)
        // const itemToEdit = findItemToEdit(id);
        // if (itemToEdit) {
        //     setEditingId(id);
        //     setIsFormOpen(true);
        // }
    };

    const handleAddPosition = () => {
        setEditingId(null);
        setIsFormOpen(true);
    };

    useEffect(() => {
        console.log(menuItems)
    })
    // const currentItem = menuItems.positions.find((item) => item.id === editingId);

    return (
        <div className={`${inter.className} w-full mx-auto px-4 py-6`}>
            <Header handleNewPosition={handleNewPosition}/>
            <Form
                visible={isFormOpen}
                onCancel={handleCancel}
                onAdd={handleAdd}
                initialName={""}
                initialLink={""}
            />
            <PositionList positions={menuItems.items}
                          onDelete={handleDelete}
                          onEdit={handleEdit}
                          onAdd={handleAddPosition} />
        </div>
    );
}

export default Home;
