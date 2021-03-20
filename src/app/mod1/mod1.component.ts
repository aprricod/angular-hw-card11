import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Mod1Service } from './mod1.service';

@Component({
  selector: 'app-mod1',
  templateUrl: './mod1.component.html',
  styleUrls: ['./mod1.component.css'],
})
export class Mod1Component implements OnInit {
  searchStr = '';
  users;
  // displayedColumns: string[] = ['name', 'username', 'email'];
  // dataSource;
  // form: FormGroup;
  constructor(public mod1: Mod1Service, private fb: FormBuilder) {
    // this.form = fb.group({
    //   userData: fb.array([
    //     fb.group({
    //       name: fb.control(''),
    //       username: fb.control(''),
    //       email: fb.control(''),
    //     }),
    //   ]),
    // });
    // this.mod1.getUsers().subscribe((usersData: User[]) => {
    //   this.dataSource = usersData;
    // });
  }

  // getUserData() {
  //   return this.form.get('userData') as FormArray;
  // }

  initUsers() {
    this.mod1.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  removeUser() {
    console.log(this.users);
    let userCount = this.users.length;
    this.mod1.deleteUser(userCount);
    this.users.pop(userCount);
  }

  createUser() {
    let user = {
      id: 99,
      name: 'Artem Artemov',
      username: 'Developer',
      email: 'artem@artem.com',
      address: {
        street: 'Lenina',
        suite: 'Apt. 55',
        city: 'Rostov',
        zipcode: '344000',
        geo: {
          lat: '47.221809',
          lng: '39.720261',
        },
      },
      phone: '+7-995-930-12-20',
      website: 'artemov.site',
      company: {
        name: 'Google Inc.',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
      },
    };
    this.mod1.postUser(user);
    this.users.push(user);
  }

  changeUser() {
    let user = {
      id: 1,
      name: 'Test User',
      username: 'Test1',
      email: 'mail@mail.com',
      address: {
        street: 'Lenina',
        suite: 'Apt. 11',
        city: 'Moscow',
        zipcode: '11000',
      },
    };
    this.mod1.putUser(user);
    this.users.splice(2, 1, user);
  }

  ngOnInit(): void {
    this.initUsers();
  }
}
