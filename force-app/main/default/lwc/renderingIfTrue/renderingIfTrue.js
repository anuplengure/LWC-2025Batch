import { LightningElement } from 'lwc';

export default class RenderingIfTrue extends LightningElement {
    showDetails ='';
    changeHandler(event){
        console.log('checkbox value:'+event.target.checked);
        this.showDetails = event.target.checked;
    }

    showHandler(event){
        this.showDetails = true;
    }
    
    hideHandler(event){
         this.showDetails = false;
    }

    status = '';
    inputHandler(event){
        this.status = event.target.value;  
    }
    
    get isMorning(){
        return this.status == 'Morning';
    }
    get isAfternoon(){
        return this.status == 'Afternoon';
    }

}