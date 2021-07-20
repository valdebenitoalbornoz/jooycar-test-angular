import { BoxData, Menu } from "./app.types";

export const menu: Menu[] = [
    {
        name: "Dashboards",
        description: 'Unique dashboard designs',
        routes: [
            {
                icon: 'calendar-check',
                name: 'Project',
                url: '#'
            },
            {
                icon: 'pie-chart',
                name: 'Analysis',
                url: '#'
            }
        ]
    },
    {
        name: 'Aplications',
        description: 'Custom mode application design',
        routes: [
            {
                icon: 'calendar',
                name: 'Calendar',
                url: '#'
            },
            {
                icon: 'chat-quote',
                name: 'Chat',
                url: '#'
            },
            {
                icon: 'people',
                name: 'Contacts',
                url: '#'
            },
            {
                icon: 'minecart',
                name: 'ECommerce',
                url: '#'
            },
            {
                icon: 'cloud',
                name: 'File Manager',
                url: '#'
            },
            {
                icon: 'envelope',
                name: 'Mailbox',
                url: '#'
            },
        ]
    }
]

export const boxes: BoxData[] = [
    {
        title: 'Summary',
        value: 20.9999,
        label: 'Due Tasks',
        color: 'blue',
        insight: {
            label: 'Completed',
            value: 12.999
        }
    },
    {
        title: 'Overdue',
        value: 16.850,
        label: 'Tasks',
        color: 'blue',
        insight: {
            label: 'From yesterday',
            value: 9.1
        }
    },
    {
        title: 'Issues',
        value: 24.2,
        label: 'Open',
        color: 'yellow',
        insight: {
            label: 'Closed today',
            value: 18.9
        }
    },
    {
        title: 'Features',
        value: 37.7,
        label: 'Proposal',
        color: 'green',
        insight: {
            label: 'Implemented',
            value: 16
        }
    }
]