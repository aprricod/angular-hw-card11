import { Component, OnInit } from '@angular/core';
import { Mod1Service } from './mod1.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mod1',
  templateUrl: './mod1.component.html',
  styleUrls: ['./mod1.component.css'],
})
export class Mod1Component implements OnInit {
  searchStr = '';
  users;
  constructor(public mod1: Mod1Service, public http: HttpClient) {}

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  initUsers() {
    this.users = this.getUsers();
  }

  ngOnInit(): void {
    this.mod1.initUsers();
  }
}
