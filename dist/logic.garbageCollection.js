var garbageCollection = {

    run: function(){
        for (creep in Memory.creeps){
            if (creep != Game.Creeps[creep]){
                delete Memory.creeps[creep];
            }
        }

    }
}

module.exports = garbageCollection;