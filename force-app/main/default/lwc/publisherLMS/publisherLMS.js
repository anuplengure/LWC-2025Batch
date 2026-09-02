import { LightningElement,wire } from 'lwc';
// Import message service features required for publishing and the message channel
import { publish, MessageContext } from "lightning/messageService";
import recordSelected from "@salesforce/messageChannel/lwcchannel__c";

export default class PublisherLMS extends LightningElement {

    @wire(MessageContext) messageContext;

    clickHandler(){
        publish(this.messageContext, recordSelected, {strVar : 'This is strVar'});
    }
}