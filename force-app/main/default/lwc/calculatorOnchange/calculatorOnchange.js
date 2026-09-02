import { LightningElement,track } from 'lwc';

export default class CalculatorOnchange extends LightningElement {

    showResult = false;
    firstNumber;
    secondNumber
    result;
    @track resultList = [];

    calculate(event){
        alert("calculate called");
        this.firstNumber = parseFloat(this.template.querySelector('[data-id="firstNumber"]').value);
        this.secondNumber = parseFloat(this.template.querySelector('[data-id="secondNumber"]').value);
        console.log("firstNumber : "+this.firstNumber+"\t"+"secondNumber : "+this.secondNumber);

        this.showResult = true;

        switch(event.target.label){
            case "Add":
                this.result = parseFloat(this.firstNumber + this.secondNumber);
                this.resultList.push(this.firstNumber + " + " + this.secondNumber + " = " + this.result);
                console.log("Add : "+this.result);
                break;
            case "Subtract":
                this.result = parseFloat(this.firstNumber - this.secondNumber);
                this.resultList.push(this.firstNumber + " - " + this.secondNumber + " = " + this.result);
                console.log("Subtract : "+this.result);
                break;
            case "Multiply":
                this.result = parseFloat(this.firstNumber * this.secondNumber);
                this.resultList.push(this.firstNumber + " * " + this.secondNumber + " = " + this.result);
                console.log("Multiply : "+this.result);
                break;
            case "Divide":
                this.result = parseFloat(this.firstNumber / this.secondNumber);
                this.resultList.push(this.firstNumber + " / " + this.secondNumber + " = " + this.result);
                console.log("Divide : "+this.result);
                break;
        }
       
    }

    changeHandler(){
        this.showResult = false;
    }

    
}