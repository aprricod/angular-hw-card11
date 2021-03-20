import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.interface';

@Pipe({
  name: 'search',
  pure: false,
})
export class SearchPipe implements PipeTransform {
  transform(users: User[], value: string) {
    if (!users) {
      return false;
    }
    return users.filter((user: User) => {
      return (
        user.name.toLowerCase().includes(value.toLowerCase()) ||
        user.username.toLowerCase().includes(value.toLowerCase()) ||
        user.email.toLowerCase().includes(value.toLowerCase()) ||
        user.address.street.toLowerCase().includes(value.toLowerCase()) ||
        user.address.suite.toLowerCase().includes(value.toLowerCase()) ||
        user.address.city.toLowerCase().includes(value.toLowerCase()) ||
        user.address.zipcode.toLowerCase().includes(value.toLowerCase()) ||
        user.address.geo.lat.toLowerCase().includes(value.toLowerCase()) ||
        user.address.geo.lng.toLowerCase().includes(value.toLowerCase())
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
