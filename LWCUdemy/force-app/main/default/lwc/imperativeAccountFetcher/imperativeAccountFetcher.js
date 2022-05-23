import { LightningElement } from 'lwc';
import accountFetcher from '@salesforce/apex/AccountController.getAccounts';
export default class ImperativeAccountFetcher extends LightningElement {
    numberOfAccounts;
    allAccounts;
    
    getAccounts(){
        accountFetcher({
            numberOfAccounts: this.numberOfAccounts
        })
        .then(result => {
            this.allAccounts = result;
        })
        .catch(error => {
            this.allAccounts = error;
        })
    }
    
    updateEntry(event){
        this.numberOfAccounts = event.target.value;
    }
}