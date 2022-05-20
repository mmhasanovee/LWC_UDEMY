import { LightningElement, api } from 'lwc';

export default class MariaParent extends LightningElement {
    name = [
        { label: 'John', value: 'x' },
        { label: 'Mary', value: 'd' },
        { label: 'Peter', value: 'e' },
        { label: 'Sophia', value: 'Sotphia' },
        { label: 'Emma', value: 'y' },
        { label: 'Olivia', value: 'Olivwia' },
    ];
}