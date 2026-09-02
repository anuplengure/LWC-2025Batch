import { LightningElement,wire } from 'lwc';
import { getRecord,getFieldValue,updateRecord } from 'lightning/uiRecordApi';
import SUBJECT_FIELD from '@salesforce/schema/Case.Subject';
import DESCRIPTION_FIELD from '@salesforce/schema/Case.Description';
import PRIORITY_FIELD from '@salesforce/schema/Case.Priority';
import STATUS_FIELD from '@salesforce/schema/Case.Status';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

const fieldsArray =[SUBJECT_FIELD,DESCRIPTION_FIELD,PRIORITY_FIELD,STATUS_FIELD];

export default class CaseEditorLDS extends LightningElement {

     isValidCase = false;
    recId;
    subject;
    description;
    priority;
    status;
    priorityOptions = [
        {label : 'High', value : 'High'},
        {label : 'Medium', value : 'Medium'},
        {label : 'Low', value : 'Low'}
    ];
    statusOptions = [
        {label : 'New',value : 'New'},
        {label : 'Working',value : 'Working'},
        {label : 'Escalated',value : 'Escalated'},
        {label : 'Closed',value : 'Closed'},
        {label : 'Draft',value : 'Draft'},
        {label : 'Complete',value : 'Complete'}
    ];

    @wire(getRecord,{recordId : '$recId', fields : fieldsArray}) wiredRecord({data,error}){
        if(data){
            this.isValidCase = true;
            console.log('data:'+JSON.stringify(data));
            this.subject = getFieldValue(data,SUBJECT_FIELD);
            this.description = getFieldValue(data,DESCRIPTION_FIELD);
            this.priority = getFieldValue(data,PRIORITY_FIELD);
            this.status = getFieldValue(data,STATUS_FIELD);
        }else if(error){
            console.log('error:'+JSON.stringify(error));
        }
    }

    idChangeHandler(event){
        this.recId = event.target.value;
        this.isValidCase = true;
    }
    subjectChangeHandler(event){
        this.subject = event.target.value;
    }
    descriptionChangeHandler(event){
        this.description = event.target.value;
    }
    priorityChangeHandler(event){
        this.priority = event.target.value;
    }
    statusChangeHandler(event){ 
        this.status = event.target.value;
    }
    saveHandler(){
        const fields = {
            //Api : variable
            Id : this.recId,
            Subject : this.subject,
            Description : this.description,
            Priority : this.priority,
            Status : this.status
        };

        updateRecord({fields}).then(()=>{
            const updateEvent = new ShowToastEvent({
                title : 'Update',
                message : 'Case updated successfylly',
                variant : 'success'
            });
            this.dispatchEvent(updateEvent);
        }).catch((error)=>{
            console.log('Error:'+error);
        });
    }

}