import { LightningElement } from 'lwc';

export default class ButtonClickEvent extends LightningElement {
    showMessage = false;
handleClick() {
this.showMessage = true;
}
}