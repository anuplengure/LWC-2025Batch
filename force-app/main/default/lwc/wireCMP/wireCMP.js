import { LightningElement,wire,track } from 'lwc';
import getAccRecs from '@salesforce/apex/wireApexCntrl.getAccRecs';

export default class WireCMP extends LightningElement {

    @track accList;
    error;

    // wire as Property
    @wire(getAccRecs) wiredAccList;

    //wire as a Function  , we can apply validations
    @wire(getAccRecs) wiredAccListFunction({data,error}){
        if(data){
            this.accList = data;
        }else if(error){
            this.error = error;
        }
    }
}