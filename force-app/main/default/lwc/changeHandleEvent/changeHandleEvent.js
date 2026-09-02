import { LightningElement } from 'lwc';

export default class ChangeHandleEvent extends LightningElement {
    userName = '';
    handleChange(event) {
        this.userName = event.target.value;
    }
}