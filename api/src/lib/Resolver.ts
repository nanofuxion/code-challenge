import { EventEmitter } from 'events';

export class Resolver<T> extends EventEmitter {
    protected models: T;
    constructor(models: T) {
        super();
        this.models = models;
    }
}
