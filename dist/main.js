var logic
logic.creepController = require("logic.creepController")
logic.garbageCollection = require("logic.garbageCollection")


module.exports.loop = function () {
    
    //Logic Scheduling to be handled later

    for(property in logic){
        try{
            logic[property].run()
        }
        catch(error){
            //register errors with handling messages
            console.log("WARNING: Unhandled error in logic." + propery + ": " + error)
        }
    }

    //Handle errors
}