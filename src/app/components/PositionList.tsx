'use client';

import Card from "./Card"
import {PositionItem} from "@/types/types";

interface Props {
    positions: PositionItem[];
    onDelete: (index: number) => void;
    onEdit: (index: number) => void;
    onAdd: () => void;
}

const PositionList = ({positions, onDelete, onEdit, onAdd}: Props) => {
    const hasPositions = positions.length > 0;

    return (
        <div className="mx-auto mt-7">
            <ul className="space-y-7">
                {hasPositions && (positions.map((position) => (
                    <Card key={position.id} item={position} onDelete={onDelete} onEdit={onEdit} onAdd={onAdd} />
                )))}
                {!hasPositions && <p className="text-center text-gray-500">Brak pozycji</p>}
            </ul>
        </div>
    );
};


export default PositionList;