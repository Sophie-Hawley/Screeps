var roleHarvester = require('logic.role.harvester');
var roleUpgrader = require('logic.role.upgrader');
var roleBuilder = require('logic.role.builder');

var creepController = {
    
    run: function(){
            for(var name in Game.creeps) {
                var creep = Game.creeps[name];
                if(creep.memory.role == 'harvester') {
                    roleHarvester.run(creep);
                }
                if(creep.memory.role == 'upgrader') {
                    roleUpgrader.run(creep);
                }
                if(creep.memory.role == 'builder') {
                    roleBuilder.run(creep);
            }
        }
    }
}