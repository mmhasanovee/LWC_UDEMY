import { LightningElement, track } from 'lwc';

export default class SimpleCalculatorKekw extends LightningElement {
    outputResult;
    firstNumber;
    secondNumber;
    dummyOutput = 'this is a dummy output';
    
    signMap = { add: "+", sub: "-", mul: "*", div: "/", mod: "%" }
    
    inputChangeHandler(event){
        const currentNumber = event.target.name;
        switch(currentNumber){
            case 'firstNumber':
                this.firstNumber = event.target.value;
            break;
            case 'secondNumber':
                this.secondNumber = event.target.value;
            break;
        }
    }
    
    computation(event){
        const currentOperation = event.target.dataset.name;
        try{
        var fn = parseInt(this.firstNumber);
        var sn = parseInt(this.secondNumber);}
        catch(err){
            console.log(err);
        }
        calculateX(currentOperation,fn,sn);
    }
    
    calulateX(fn,sn){
        try{
        switch(currentOperation){
            case 'add':
               this.outputResult = fn + sn;
            break;
            case 'sub':
                this.outputResult = fn - sn;;
            break;
            case 'mul':
                this.outputResult = fn * sn;
            break;
            case 'div':
                this.outputResult = fn / sn;
            break;
            case 'mod':
                this.outputResult = fn % sn;
            break;
        }
    }
    catch(error){
        console.log(error);
    }
        //alert('Output result is: ' + this.outputResult);
        console.log(this.outputResult);
    }
}