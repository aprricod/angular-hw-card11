import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(users: any[], value: any) {
    return users.filter((users: string | any[]) => {
      return users.includes(value);
    });
  }
}
