import { LightningElement } from 'lwc';

export default class Rendering3 extends LightningElement {
    
    showPhone = false;
    
    togglePhone() {
        this.showPhone = !this.showPhone;
    }
    
    get phoneClass() {
        return this.showPhone ? 'unblur' : 'blur';
    }
    
    get buttonLabel() {
        return this.showPhone ? 'Hide Phone Number' : 'Show Phone Number';
    }
    
}