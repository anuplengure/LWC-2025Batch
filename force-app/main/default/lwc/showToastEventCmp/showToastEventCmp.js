import { LightningElement,track } from 'lwc';
import getAccRecs from '@salesforce/apex/showToastEventCntrl.getAccRecs';

// Importing jsCodeSharing
import JsCodeSharing from 'c/jsCodeSharing';

//extending jsCodeSharing, no need to extend with LightningElement here as we have extended jsCodeSharing with LightningElement
export default class ShowToastEventCmp extends JsCodeSharing {
    @track accList = [];
    @track error;
    size;

    changeHandler(event){
        this.size = event.target.value;
        console.log('changeHandler was called...'+this.size);
    }

    clickHandler(){
        console.log('clickHandler was called...');
    
        getAccRecs({count : this.size}).then((result)=>{
            this.accList = result;
            
            //Constructor Function- new keyword with Function name having First Letter Capital
            /*const showMessage = new ShowToastEvent({
                title : 'Success',
                message : this.size + ' Account Records fetched',
                variant : 'success'
            });
            this.dispatchEvent(showMessage);*/

            //Dynamic ShowToastEvent
            this.handleSuccessErrorToast('Success',this.size +' '+'Account Records fetched','success');

        }).catch((error)=>{
            this.error = error;
            console.log('Error:'+error);

            /*const showMessage = new ShowToastEvent({
                title : 'Error',
                message : 'Unable to fetch Account Records'+error.body.message,
                variant : 'error'
            });
            this.dispatchEvent(showMessage);*/

            //Dynamic ShowToastEvent
            this.handleSuccessErrorToast('Error','Unable to fetch Account Records'+error.body.message,'error');
        });
    }

    //Reusable ShowToastEvent Function
    /*handleSuccessErrorToast(titleVar,messageVar,variantVar){
        const showMessage = new ShowToastEvent({
            title : titleVar,
            message : messageVar,
            variant : variantVar
        });
        this.dispatchEvent(showMessage);
    }*/
}