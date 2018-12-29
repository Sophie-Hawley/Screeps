function getName(type:number, role:string = null, clade:number = null, droneID:number){
    if (type == CLADEMASTER){
        if(!Memory.clades){
            Memory.clades = 1;
        }
        return "Clademaster of the " + Memory.clades + getNumberSuffix(Memory.clades) + " Clade";
    }
    if (type == CLADELORD){
        if (!role){
            console.log("ERROR!: attempted to name a cladelord with no role")
            return null;
        }
        else if (!clade){
            console.log("ERROR!: attempted to name a cladelord with no clade")
            return null;
        }
        else{
            return "Cladelord of " + role + " of the " + clade + getNumberSuffix(clade) + " Clade";
        }
    }
    if (type == DRONE){
        if(!role){
            console.log("ERROR!: attempted to name drone with no role");
            return null;
        }
        else if(!clade){
            console.log("ERROR!: attempted to name drone with no clade");
            return null;
        }
        else if(!droneID){
            console.log("ERROR!: attempted to name drone with no sequence number")
            return null
        }
        else{
            return role + " drone of the " + clade + getNumberSuffix(clade) + " Clade";
        }

    }
}
function commitClade(){
    Memory.clades = Memory.clades + 1;
}

function getNumberSuffix(number){
    if (number = 1){
        return "st";
    }
    if (number = 2){
        return "nd";
    }
    if (number = 3){
        return "rd";
    }
    else{
        return "th";
    }
}