import { LightningElement,wire ,api} from 'lwc';
import { fireEvent } from 'c/pubsub';
import {CurrentPageReference} from 'lightning/navigation';

export default class PubsubPublisher extends LightningElement {

    @wire(CurrentPageReference) pageRef;
    @api stdInfo = {name:'Anup', age:25, city:'Pune'};
    
    clickHandler(){
        alert('clickHandler from publisher was called');
        fireEvent(this.pageRef,'buttonclickevent',this.stdInfo);
    }
}