import { LightningElement } from 'lwc';

export default class PublicMethodParent extends LightningElement {
    
    inputVal = ''; 
    inputChangeHandler(event){
        this.inputVal = event.target.value;
    }

    clickHandler(){

        const childCmp = this.template.querySelector('c-public-method-child');
        const returnMsg = childCmp.selectedValues(this.inputVal);
        alert(returnMsg);
    }
}