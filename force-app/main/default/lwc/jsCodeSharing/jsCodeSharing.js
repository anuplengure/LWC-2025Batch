import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class JsCodeSharing extends LightningElement {

    handleSuccessErrorToast(titleVar,messageVar,variantVar){
        const showMessage = new ShowToastEvent({
            title : titleVar,
            message : messageVar+'- from jsCodeSharing',
            variant : variantVar
        });
        this.dispatchEvent(showMessage);
    }
}