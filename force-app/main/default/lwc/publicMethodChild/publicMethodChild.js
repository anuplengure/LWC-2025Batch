import { LightningElement,track,api } from 'lwc';

export default class PublicMethodChild extends LightningElement {

    @track value = ['Red'];

    options= [
            { label: 'Red', value: 'Red' },
            { label: 'Green', value: 'Green' },
            { label: 'Blue', value: 'Blue' },
            { label: 'Black', value: 'Black' },
            { label: 'White', value: 'White' }
        ];

    @api selectedValues(checkboxVal){
        alert('checkboxVal:'+checkboxVal);
        //this.value = checkboxVal;
        const selectedVal = this.options.find(function(item){
            return checkboxVal == item.value;
        });
        if(selectedVal){
            this.value = checkboxVal;
            return 'Successfully Checked';
        }
        return 'No match found';
    }
}