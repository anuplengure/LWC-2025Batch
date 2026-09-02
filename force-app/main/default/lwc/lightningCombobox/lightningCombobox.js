import { LightningElement } from 'lwc';

export default class LightningCombobox extends LightningElement {
    
    selectedRecord = '';
    
    recordOptions = [
        { label: 'Account - ABC Corp', value: 'ABC Corp' },
        { label: 'Account - XYZ Ltd', value: 'XYZ Ltd' },
        { label: 'Account - Test Org', value: 'Test Org' }
    ];
    
    handleRecordChange(event) {
        this.selectedRecord = event.target.value;
    }
}