import { Pipe, PipeTransform } from '@angular/core';
import { ENTITIES } from '../../mock-entities';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(items: any[], shouldSort: boolean = false, ascending: boolean = true): any[] {
    if (!items) {
      return [];
    }
    if (!shouldSort) {
      return ENTITIES;
    }
    if (ascending) {
      return items.sort((item1: any, item2: any) => {
        return this.orderByName(item1, item2);
      });
    } else {
      return items.sort((item1: any, item2: any) => {
        return this.orderByName(item2, item1);
      });
    }
  }

  orderByName(a: any, b: any) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  }

}
