import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root',
})
export class Mod1Service {
  constructor(public http: HttpClient) {}

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  deleteUser(i) {
    return this.http
      .delete(`https://jsonplaceholder.typicode.com/users/${i}`)
      .pipe(
        map((data) => {
          console.log(data);
          return data;
        })
      )
      .subscribe((data) => {
        console.log(data);
      });
  }

  postUser(item) {
    return this.http
      .post('https://jsonplaceholder.typicode.com/users', { item })
      .pipe(
        map((data) => {
          console.log(data);
          return data;
        })
      )
      .subscribe((data) => {
        console.log(data);
      });
  }

  putUser(item) {
    return this.http
      .put(`https://jsonplaceholder.typicode.com/users/${item.id}`, { item })
      .pipe(
        map((data) => {
          console.log(data);
          return data;
        })
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
