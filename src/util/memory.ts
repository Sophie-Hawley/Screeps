export class mem {
    static clean(){
        this.cleanCreeps();
    }
    private static cleanCreeps(){
        for (let name in Memory.creeps){
            if (!Game.creeps[name]){
                delete Memory.creeps[name];
            }
        }
    }
}