import { LightningElement } from 'lwc';

export default class IterationAssignment5 extends LightningElement {
    tasks = [
        {
            id: 1,
            title: 'Prepare LWC Day 3 Notes',
            status: 'Pending',
            isCompleted: false,
            statusClass: 'pending'
        },
        {
            id: 2,
            title: 'Post LinkedIn Update',
            status: 'Completed',
            isCompleted: true,
            statusClass: 'completed'
        }
    ];
    handleComplete(event) {
        const taskId = event.target.dataset.id;
        this.tasks = this.tasks.map(task => {
            if (task.id == taskId) {
                return {
                    ...task,
                    status: 'Completed',
                    isCompleted: true,
                    statusClass: 'completed'
                };
            }
            return task;
        });
    }
}