
export type HomeColor = 
    null |
    'blue' |
    'red' |
    'yellow' |
    'green';

export interface BoxData {
    title: string;
    label: string;
    value: number;
    insight: {
        label: string;
        value: number;
    },
    color: HomeColor
}

interface MenuRoute {
    name: string;
    icon: string;
    url: string;
}

export interface Menu {
    name: string;
    description: string;
    routes: MenuRoute[];
}
