import { LightningElement } from 'lwc';

export default class Rendering4 extends LightningElement {

    fullPhone = '+91 98765 43210';
    showFullPhone = false;
    
    togglePhone() {
        this.showFullPhone = !this.showFullPhone;
    }

    get displayPhone() {
        if (this.showFullPhone) {
            return this.fullPhone;
        }
        return '******' + this.fullPhone.slice(-4);
    }

    get buttonLabel() {
        return this.showFullPhone ? 'Hide Phone Number' : 'Show Phone Number';
    }

}