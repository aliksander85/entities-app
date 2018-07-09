import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(items: any[], shouldSort: boolean = false, ascending: boolean = true): any[] {
    if (!items) {
      return [];
    }
    if (!shouldSort) {
      return items.sort((item1: any, item2: any) => {
        return this.orderBy(item1, item2, 'id');
      });
    }
    if (ascending) {
      return items.sort((item1: any, item2: any) => {
        return this.orderBy(item1, item2);
      });
    } else {
      return items.sort((item1: any, item2: any) => {
        return this.orderBy(item2, item1);
      });
    }
  }

  orderBy(a: any, b: any, key: string = 'name') {
    if (key === 'id') {
      if (a[key] < b[key]) {
        return -1;
      }
      if (a[key] > b[key]) {
        return 1;
      }
    } else {
      if (a[key].toLowerCase() < b[key].toLowerCase()) {
        return -1;
      }
      if (a[key].toLowerCase() > b[key].toLowerCase()) {
        return 1;
      }
    }
    return 0;
  }

}
