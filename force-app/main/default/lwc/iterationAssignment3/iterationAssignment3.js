import { LightningElement } from 'lwc';

export default class IterationAssignment3 extends LightningElement {
     contacts = [
        {
            id: 1,
            name: 'Anup',
            email: 'anup@gmail.com',
            phone: '+91 1111111111',
            isVIP: true
        },
        {
            id: 2,
            name: 'Bruce Wayne',
            email: 'bruce@gmail.com',
            phone: '+91 2222222222',
            isVIP: true
        },
        {
            id: 3,
            name: 'John Wick',
            email: 'john@gmail.com',
            phone: '+91 3333333333',
            isVIP: false
        },
        {
            id: 4,
            name: 'Piter Parker',
            email: 'piter@gmail.com',
            phone: '+91 4444444444',
            isVIP: false
        }
    ];

    get hasContacts(){
        return this.contacts.length>0;
    }

    get contactClass() {
        return 'slds-box slds-m-bottom_small';
    }
}