import { LightningElement,track,wire } from 'lwc';
import getAccRecs from '@salesforce/apex/mutedWireApexCntrl.getAccRecs';

export default class MutedWiredData extends LightningElement {

    @track accList = [];
    size;

    @wire(getAccRecs,{count : "$size"}) wiredAccRecords({data,error}){
        if(data){
            this.accList = data.map(function(acc,index){
                return {
                    Id : acc.Id,
                    Name : acc.Name ? acc.Name.toUpperCase() : ' ',
                    srNo : index+1

                };
            });
        }else if(error){
            console.log('error:'+error);
        }
        
    }

    clickHandler(){
        this.size = this.template.querySelector('lightning-input').value;
    }
}