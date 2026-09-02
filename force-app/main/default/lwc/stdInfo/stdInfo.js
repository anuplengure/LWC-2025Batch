import { LightningElement ,api} from 'lwc';

export default class StdInfo extends LightningElement {
    @api studentInfoChild;

    //Declarative
    /*tileClickHandler(){
        //alert('tileClickHandler was called');
        //Child to Parent Event Communication - CustomEvent
        const selectEvent = new CustomEvent('tileclick',{detail : this.studentInfoChild});
        this.dispatchEvent(selectEvent);
    }*/

        //Programmatic - (bubbles : true)
        tileClickHandler(){
        //alert('tileClickHandler was called');
        //Child to Parent Event Communication - CustomEvent
        const selectEvent = new CustomEvent('tileclick',{detail : this.studentInfoChild, bubbles : true});
        this.dispatchEvent(selectEvent);
    }

}