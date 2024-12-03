'use client';

interface MenuItem {
    name: string;
    link: string;
}

interface Props {
    items: MenuItem[];
    onDelete: (index: number) => void;
    onEdit: (index: number) => void;
}

const PositionList = ({ items, onDelete, onEdit }: Props) => {
    return (
        <div className="w-[1168px] mx-auto mt-8">
            <ul className="flex flex-col gap-0 border-t border-gray-300 rounded-md">
                {items.length > 0 ? (
                    items.map((item, index) => (
                        <li
                            key={index}
                            className="flex justify-between items-center p-6 px-8 border-b border-gray-300 bg-white shadow-sm"
                        >
                            <div className="flex flex-col gap-1">
                                <span className="font-medium text-gray-800">{item.name}</span>
                                <span className="text-sm text-gray-600">{item.link}</span>
                            </div>

                            <div className="flex gap-4">
                                <button
                                    onClick={() => onDelete(index)}
                                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
                                >
                                    Usuń
                                </button>
                                <button
                                    onClick={() => onEdit(index)}
                                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
                                >
                                    Edytuj
                                </button>
                            </div>
                        </li>
                    ))
                ) : (
                    <p className="text-center text-gray-500">Brak pozycji w menu.</p>
                )}
            </ul>
        </div>
    );
};


export default PositionList;