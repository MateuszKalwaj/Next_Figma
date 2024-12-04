'use client';
import {inter} from "@/app/fonts/fonts";
import Header from "@/app/components/Header";
import {useEffect, useState} from "react";
import Form from "@/app/components/Form";
import PositionList from "@/app/components/PositionList";

const Home = () => {

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [menuItems, setMenuItems] = useState<{id: number; name: string; link: string }[]>([]);
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
            setMenuItems((prev) =>
                prev.map((item) =>
                    item.id === editingId ? { ...item, name, link } : item
                )
            );
        } else {
            setMenuItems((prev) => [
                ...prev,
                { id: Date.now(), name, link },
            ]);
        }
        setIsFormOpen(false);
        setEditingId(null);
    };

    const handleDelete = (id: number) => {
        setMenuItems((prev) => prev.filter((item) => item.id !== id));
        setEditingId(null);
    };

    const handleEdit = (id: number) => {
        const itemToEdit = menuItems.find((item) => item.id === id);
        if (itemToEdit) {
            setEditingId(id);
            setIsFormOpen(true);
        }
    };

    const handleAddPosition = () => {
        setEditingId(null);
        setIsFormOpen(true);
    };

    useEffect(() => {
        console.log(menuItems)
    })
    const currentItem = menuItems.find((item) => item.id === editingId);

    return (
        <div className={`${inter.className} w-full mx-auto px-4 py-6`}>
            <Header handleNewPosition={handleNewPosition}/>
            <Form
                visible={isFormOpen}
                onCancel={handleCancel}
                onAdd={handleAdd}
                initialName={currentItem ? currentItem.name : ""}
                initialLink={currentItem ? currentItem.link : ""}
            />
            <PositionList items={menuItems}
                          onDelete={handleDelete}
                          onEdit={handleEdit}
                          onAdd={handleAddPosition} />
        </div>
    );
}

export default Home;
