import { messenger } from './messenger';
import { message } from './message';
import { Cladelord } from './Cladelord';
class Clademaster{
    messenger: messenger; //Message handler assigned to this clademaster
    name: string; //Unique identifier for this clademaster
    activeMessage: message; // Active message being handled
    structures: string[]; //name ID's of all owned structures
    drones: string[]; //name id's of all owned drones not owned by child cladelords
    Cladelords: Cladelord[];//All owned cladelords handling internal colony actions
    rooms: string[]; //All rooms under control of this cladelord
    parentClade: string; //name of clademaster used to spawn this clademaster
    roles = require('../util/Roles.json');

    constructor(name: string, rooms: string[], parent:string = null){
        this.name = name;
        this.parentClade = parent;
        this.rooms = rooms;

        for(let room in rooms){
            for(let structure in Game.structures){
                if (Game.structures[structure].room.name == room ){
                    this.structures.push(structure); //save structures in owned rooms for easy access later
                }
            }
        }
        for (let role in this.roles.core){
            this.Cladelords.push(new Cladelord(role)); //Init core set of cladelords
        }
        
    }
}
