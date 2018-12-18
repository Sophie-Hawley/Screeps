export class task {
    request:string;
    target: string;
    source: string;
    isrepeatable: boolean;
    constructor(request: string, target: string, source=null, isrepeatable=false){
        this.request = request;
        this.target = target;
        this.source = source;
        this.isrepeatable = isrepeatable;
    }
}