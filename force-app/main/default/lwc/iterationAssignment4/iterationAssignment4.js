import { LightningElement } from 'lwc';

export default class IterationAssignment4 extends LightningElement {
    products = [
            {
                id: 1,
                name: 'Laptop',
                category: 'Electronics',
                price: 75000,
                isExpensive: true
            },
            {
                id: 2,
                name: 'Office Chair',
                category: 'Furniture',
                price: 18000,
                isExpensive: false
            },
            {
                id: 3,
                name: 'Smartphone',
                category: 'Electronics',
                price: 65000,
                isExpensive: true
            }
        ];
}