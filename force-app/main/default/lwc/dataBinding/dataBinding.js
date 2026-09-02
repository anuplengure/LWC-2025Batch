import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {

    greeting = 'World';
    name = '';
    changeHandler(event){
        console.log('input value:'+event.target.value);
        this.name = event.target.value;
    }
}