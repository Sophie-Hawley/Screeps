import { task } from './task';
export class taskqueue{
    queue: task[];

    getNextTask(){
        var activeTask = this.queue.shift();
        if (activeTask.isrepeatable){
            this.queue.push(activeTask);
        }
        return activeTask;
    }
}