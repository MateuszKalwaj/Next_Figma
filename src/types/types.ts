export interface PositionItem {
    id: number;
    name: string;
    link: string;
    items: PositionItem[];
}

export interface MainPosition {
    items: PositionItem[];
}