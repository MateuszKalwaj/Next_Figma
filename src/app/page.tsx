'use client';
import Header from "@/app/components/Header";
import {useEffect, useState} from "react";
import Form from "@/app/components/Form";

const Home = () => {

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [menuItems, setMenuItems] = useState<{ name: string; link: string }[]>([]);

    const handleNewPosition = () => {
        setIsFormOpen(true)
    }

    const handleCancel = () => {
        setIsFormOpen(false);
    };

    const handleAdd = (name: string, link: string) => {
        setMenuItems((prev) => [...prev, {name, link}]);
        setIsFormOpen(false);
    };

    useEffect(() => {
        console.log(menuItems)
    })

    return (
        <div className="w-full px-4 py-6">
            <Header handleNewPosition={handleNewPosition}/>
            <Form visible={isFormOpen} onCancel={handleCancel} onAdd={handleAdd}/>
            {/*<PositionList {menuItems}></PositionList>*/}
        </div>
    );
}

export default Home;
