import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.interface';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(users: User[], value: string) {
    return users.filter((user: User) => {
      return (
        user.name.includes(value) ||
        user.username.includes(value) ||
        user.email.includes(value) ||
        user.address.street.includes(value) ||
        user.address.suite.includes(value) ||
        user.address.city.includes(value) ||
        user.address.zipcode.includes(value) ||
        user.address.geo.lat.includes(value) ||
        user.address.geo.lng.includes(value)
        // данные, перечисленные ниже, не выводим в таблицу
        // user.phone.includes(value) ||
        // user.website.includes(value) ||
        // user.company.name.includes(value) ||
        // user.company.catchPhrase.includes(value) ||
        // user.company.bs.includes(value)
      );
    });
  }
}
