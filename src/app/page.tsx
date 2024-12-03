'use client';
import Header from "@/app/components/Header";
import {useEffect, useState} from "react";
import Form from "@/app/components/Form";
import PositionList from "@/app/components/PositionList";

const Home = () => {

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [menuItems, setMenuItems] = useState<{ name: string; link: string }[]>([]);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);

    const handleNewPosition = () => {
        setIsFormOpen(true)
        setEditingIndex(null);
    }

    const handleCancel = () => {
        setIsFormOpen(false);
    };

    const handleAdd = (name: string, link: string) => {
        if (editingIndex !== null) {
            setMenuItems((prev) =>
                prev.map((item, index) =>
                    index === editingIndex ? {name, link} : item
                )
            );
        } else {
            setMenuItems((prev) => [...prev, {name, link}]);
        }
        setIsFormOpen(false);
    };

    const handleDelete = (index: number) => {
        setMenuItems((prev) => {
            const updatedItems = prev.filter((_, i) => i !== index);
            // const updatedItems = prev.filter((item, i) => i !== index);  => jak w sumie lepiej pisać?


            if (editingIndex !== null && editingIndex === index) {
                setEditingIndex(null);
            }
            if (editingIndex !== null && editingIndex > index) {
                setEditingIndex((prevIndex) => (prevIndex !== null ? prevIndex - 1 : null));
            }

            return updatedItems;
        });
    };

    const handleEdit = (index: number) => {
        setEditingIndex(index);
        setIsFormOpen(true);
    };

    useEffect(() => {
        console.log(menuItems)
    })

    return (
        <div className="w-full xl:w-8/12 mx-auto px-4 py-6">
            <Header handleNewPosition={handleNewPosition}/>
            <Form
                visible={isFormOpen}
                onCancel={handleCancel}
                onAdd={handleAdd}
                initialName={editingIndex !== null ? menuItems[editingIndex].name : ""}
                initialLink={editingIndex !== null ? menuItems[editingIndex].link : ""}
            />
            <PositionList items={menuItems}
                          onDelete={handleDelete}
                          onEdit={handleEdit}/>
        </div>
    );
}

export default Home;
