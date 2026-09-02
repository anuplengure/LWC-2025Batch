import { LightningElement } from 'lwc';

export default class Rendering2 extends LightningElement {
    
    isDisplay = false;

    showDetailHandler(){
        this.isDisplay = true;
    }

    hideDetailHandler(){
        this.isDisplay = false;
    }

}