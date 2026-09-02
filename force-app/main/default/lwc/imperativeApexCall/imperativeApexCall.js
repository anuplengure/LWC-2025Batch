import { LightningElement,track } from 'lwc';
import getAccRecs from '@salesforce/apex/ImperativeApexCntrl.getAccRecs';

export default class ImperativeApexCall extends LightningElement {

    @track accList = [];
    size;

    clickHandler(){
        
        this.size = this.template.querySelector('lightning-input').value;
        alert('clickHandler was called...'+this.size);

        //New Method
        getAccRecs({count : this.size}).then((result)=>{
            console.log('result:'+JSON.stringify(result));
            this.accList = result;
        }).catch((error)=>{
            console.log('error:'+JSON.stringify(error));
        });

        //Legacy method
        /*getAccRecs({count : this.size}).then(function(result){
            console.log('result:'+JSON.stringify(result));
            this.accList = result;
        }.bind(this)).catch(function(error){
            console.log('error:'+JSON.stringify(error));
        }.bind(this));*/
    }

}