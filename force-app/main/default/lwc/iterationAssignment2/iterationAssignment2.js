import { LightningElement } from 'lwc';

export default class IterationAssignment2 extends LightningElement {

    contacts = [];

    get hasContacts(){
        return this.contacts.length>0;
    }
}