import { LightningElement,track,wire } from 'lwc';
import {registerListener} from 'c/pubsub';
import {CurrentPageReference} from 'lightning/navigation';

export default class PubsubSubscriber extends LightningElement {

    @track std={};

    @wire(CurrentPageReference) pageRef;
    
    connectedCallback(){
        registerListener('buttonclickevent',this.handleButtonClickEvent,this);
    }
    
    handleButtonClickEvent(payload){
        console.log('payload from publisher is '+JSON.stringify(payload));
        this.std = payload;
    }
}