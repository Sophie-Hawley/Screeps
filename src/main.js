var logic
logic.creepController = require("logic.creepController")
logic.garbageCollection = require("logic.garbageCollection")


module.exports.loop = function () {

    for(property in logic){
        try{
            logic[property].run()
        }
        catch(error){
            console.log("WARNING: Unhandled error in logic " + error)
        }
    }
}