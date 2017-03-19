import { TodosService } from './todos.service';
export class Todo {
    public createdAt: number;
    public id: string;

    constructor(public name: string, public description: string, public isDone?: boolean) {
        this.createdAt = new Date().getTime();
        this.isDone = isDone || false;
        this.id = Math.random().toString(36).substring(7);
        // console.log(this.id);
    }
}
