import React, { createContext, useContext, useState } from 'react';
import { PositionItem, MainPosition } from '@/types/types';

interface MenuContextType {
    menuItems: MainPosition;
    addItem: (path: number[], name: string, link: string) => void;
    editItem: (path: number[], name: string, link: string) => void;
    deleteItem: (path: number[]) => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [menuItems, setMenuItems] = useState<MainPosition>({ items: [] });

    const updateNestedItems = (
        items: PositionItem[],
        path: number[],
        callback: (item: PositionItem) => PositionItem
    ): PositionItem[] => {
        return items.map((item) => {
            if (item.id === path[0]) {
                return path.length === 1
                    ? callback(item)
                    : {
                        ...item,
                        items: updateNestedItems(item.items, path.slice(1), callback),
                    };
            }
            return item;
        });
    };


    const addItem = (path: number[], name: string, link: string) => {
        const newItem: PositionItem = { id: Date.now(), name, link, items: [] };

        if (path.length === 0) {
            setMenuItems((prev) => ({
                ...prev,
                items: [...prev.items, newItem],
            }));
        } else {
            setMenuItems((prev) => ({
                ...prev,
                items: updateNestedItems(prev.items, path, (item) => ({
                    ...item,
                    items: [...item.items, newItem],
                })),
            }));
        }
    };


    const editItem = (path: number[], name: string, link: string) => {
        if (path.length === 1) {
            setMenuItems((prev) => ({
                ...prev,
                items: prev.items.map((item) =>
                    item.id === path[0] ? { ...item, name, link } : item
                ),
            }));
        } else {
            setMenuItems((prev) => ({
                ...prev,
                items: updateNestedItems(prev.items, path.slice(0, -1), (item) => ({
                    ...item,
                    items: item.items.map((child) =>
                        child.id === path[path.length - 1] ? { ...child, name, link } : child
                    ),
                })),
            }));
        }
    };

    const deleteItem = (path: number[]) => {
        if (path.length === 1) {
            setMenuItems((prev) => ({
                ...prev,
                items: prev.items.filter((item) => item.id !== path[0]),
            }));
        } else {
            setMenuItems((prev) => ({
                ...prev,
                items: updateNestedItems(prev.items, path.slice(0, -1), (item) => ({
                    ...item,
                    items: item.items.filter((child) => child.id !== path[path.length - 1]),
                })),
            }));
        }
    };

    return (
        <MenuContext.Provider value={{ menuItems, addItem, editItem, deleteItem }}>
            {children}
        </MenuContext.Provider>
    );
};

export const useMenu = () => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error('Error: useMenu must be used within a MenuProvider');
    }
    return context;
};
