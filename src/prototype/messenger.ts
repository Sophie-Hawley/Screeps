import { message } from './message';
import { metadata } from './metadata';
import { mail } from './mail';
export class messenger {
    messageQueue:message[];
    deferredQueue:mail[];
    giveMessage(message:message, name:string){
        message.lastfrom = name;
        this.messageQueue.push(message);
    }
    parkMessage(metadata:metadata, message:message) {
        this.deferredQueue.push(new mail(metadata, message));
    }
    sendMessage(targetID:string, message:message){
        Memory.clade[name].messenger.giveMessage(message, parent.name);
    }
    getNextMessage(){
        return this.messageQueue.shift();
    }
    getDeferredMail(index){
        while (index != 0){
            //treat deferred queue as a card deck
            this.deferredQueue.push(this.deferredQueue.shift());
        }
        return this.deferredQueue.shift();
    }
}
