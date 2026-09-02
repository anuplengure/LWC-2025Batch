import { LightningElement } from 'lwc';

//Importing plain javascript function
import { getSum } from 'c/jsCodeSharingBetweenCmp';

export default class MathematicCalculation extends LightningElement {
    first='';
    second='';
    result='';

    changeHandler(event){
       if(event.target.label === 'First Number'){
            this.first = event.target.value;
       }
       if(event.target.label === 'Second Number'){
            this.second = event.target.value;
       }
    }

    clickHandler(){
        alert('first:'+this.first);
        alert('second:'+this.second);
        
        //getSum() is a plain js function
        this.result = getSum(parseInt(this.first),parseInt(this.second));
        console.log('result:'+getSum(parseInt(this.first),parseInt(this.second)));
    }
    
}