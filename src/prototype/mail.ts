import { metadata } from "./metadata";
import { message } from "./message";

export class mail {
    metadata: metadata;
    message: message;
    constructor(metadata: metadata, message: message) {
        this.metadata = metadata;
        this.message = message;
    }
}