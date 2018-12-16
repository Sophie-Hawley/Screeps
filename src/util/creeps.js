var nameBuilder = require('util.nameBuilder');

var loadout = [WORK, CARRY, MOVE]

var creeps = {

    spawn: function(target, role){

        var check
        check = target.spawnCreep(loadout, nameBuilder.getName(role), {memory: {role: role}});
        if (check == 0){
            commitName(role);
        }
        return check;
    }
}

module.exports = creepHandler;