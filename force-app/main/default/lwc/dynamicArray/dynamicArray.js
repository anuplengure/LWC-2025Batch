import { LightningElement, track } from 'lwc'; // Import @track

export default class DynamicArray extends LightningElement {
    // Reactive properties to hold user input and the list of objects
    @track name = "";
    @track age = "";
    @track rollnumber = "";
    @track dynamicObjectList = []; // Array to store created objects

    // Capture input changes
    changeHandler(event) {
        const field = event.target.dataset.field;
        const value = event.target.value;

        if (field === 'name') this.name = value;
        else if (field === 'age') this.age = value;
        else if (field === 'rollnumber') this.rollnumber = value;
    }

    // Create a new object on button click
    clickHandler(){
        alert('clickHandler was called');

        // Assemble the current inputs into a new object
        const newObject = {
            name: this.name,
            age: this.age,
            rollnumber: this.rollnumber,
            id: Date.now() // Best practice to add a unique key for list rendering
        };

        // Add the new object to the list using the spread operator for reactivity
        this.dynamicObjectList = [...this.dynamicObjectList, newObject];
        
        // Clear input fields for the next entry
        this.name = '';
        this.age = '';
        this.rollnumber = '';
    }
    
    // Getter to display the list of objects as a string
    get dynamicobjectStringified() {
        return JSON.stringify(this.dynamicObjectList, null, 2);
    }
}
