import { Todo } from '../todo';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todosListFilter'
})
export class TodosListFilterPipe implements PipeTransform {

  private isTodoFieldInclude(todo: Todo, fieldName: string, str: string) {
    return todo[fieldName].toLowerCase().match('^.*' + str.toLowerCase() + '.*$');
  }

  transform(value: Todo[], args?: string): any {
    if (!args || args[0].length === 0) {
      return value;
    }

    const resArray: Todo[] = [];
    for (const item of value) {
      if (this.isTodoFieldInclude(item, 'name', args) || this.isTodoFieldInclude(item, 'description', args)) {
        resArray.push(item);
      }
    }
    return resArray;
  }
}
