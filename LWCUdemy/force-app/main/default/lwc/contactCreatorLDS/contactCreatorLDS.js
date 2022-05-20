import { LightningElement, wire, track } from 'lwc';
import { createRecord , getRecord} from 'lightning/uiRecordApi';

export default class ContactCreatorLDS extends LightningElement {
    cName;
    
    updateNameInput(event) {
        this.cName = event.target.value;
    }
    
    @track recordIxd;
    @track acccountKekw;
    
    @wire(getRecord, { recordId: '$recordIxd', fields: ['Name'] })
    accountKekw;

    submitContact() {
        const fields = {
            'Name': this.cName
        };
        const recordInput = { apiName: 'Account', fields };
        createRecord(recordInput)
            .then((response) => {
                console.log('Contact has been created',response.id);
                this.recordIxd = response.id;
            })
            .catch(error => {
                console.log(error);
            });
    }
    
    get getAccountx() {
        if(this.accountKekw.data){
        console.log('llll');
        console.log(this.accountKekw.data.fields.Name.value);
            return this.accountKekw.data.fields.Name.value;
        }   
    }

}