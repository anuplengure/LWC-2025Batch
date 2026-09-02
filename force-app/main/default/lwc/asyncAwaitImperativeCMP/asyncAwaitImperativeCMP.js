import { LightningElement,track } from 'lwc';
import getAccRecs from '@salesforce/apex/ImperativeApexCntrl.getAccRecs';

export default class AsyncAwaitImperativeCMP extends LightningElement {

    @track accRec =[];
    size;

    async clickHandler(){
        this.size = this.template.querySelector('lightning-input').value;

        try{
            this.accRec = await getAccRecs({count : this.size});
            
            console.log('accRec:'+JSON.stringify(this.accRec));
        }catch(error){
            console.log('error:'+error);
        }
    }
}