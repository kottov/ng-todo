export class Todo {
    public createdAt: number;

    constructor(public name: string, public description: string, public isDone?: boolean) {
        this.createdAt = new Date().getTime();
        this.isDone = isDone || false;
    }
}
