import { LightningElement,track } from 'lwc';

export default class ParentCmpSlots extends LightningElement {
    @track selectedStudent = '';
    @track studentInfoParent =[
        {name:'Anup',age:'28',rollNumber:'101'},
        {name:'Ben',age:'21',rollNumber:'102'},
        {name:'Christopher',age:'32',rollNumber:'103'},
        {name:'Daniel',age:'24',rollNumber:'104'}
    ];

}