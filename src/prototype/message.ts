export class message{
    ttl: number;
    type: number;
    creator: string;
    task: task;
    priority: number;
    lastfrom: string;
    constructor(ttl: number, type: number, creator: string, task: task, priority = 10) {
        
        this.ttl = ttl;
        this.type = type;
        this.creator = creator;
        this.task = task;
        this.priority = priority;
    }
    touch(){
        this.ttl = this.ttl - 1;
        if (this.ttl <= 0){
            return -1;
        }
        else
            return 0;

    }
    getType(){
        return this.type;
    }   
}