import { LightningElement,wire } from 'lwc';
// Import message service features required for subscribing and the message channel
import {subscribe, APPLICATION_SCOPE, MessageContext} from "lightning/messageService";
import recordSelected from "@salesforce/messageChannel/auracmp__c";

export default class SubscriberLwcAura extends LightningElement {

    strData;
    @wire(MessageContext) messageContext;

    // Encapsulate logic for Lightning message service subscribe and unsubsubscribe
    subscribeToMessageChannel() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                recordSelected,
                (message) => this.handleMessage(message),
                { scope: APPLICATION_SCOPE },
            );
        }
    }

    // Handler for message received by component
    handleMessage(msg) {
        console.log('msg:'+JSON.stringify(msg));
        this.strData = msg.strVar.value;
    }

    // Standard lifecycle hooks used to subscribe and unsubsubscribe to the message channel
    connectedCallback() {
        this.subscribeToMessageChannel();
    }

}