import { LightningElement } from 'lwc';

export default class ActionCompleted extends LightningElement {
    
    isCompleted = false;

    handleAction() {
        this.isCompleted = true;
    }
}