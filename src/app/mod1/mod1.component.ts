import { Component, OnInit } from '@angular/core';
import { Mod1Service } from './mod1.service';

@Component({
  selector: 'app-mod1',
  templateUrl: './mod1.component.html',
  styleUrls: ['./mod1.component.css'],
})
export class Mod1Component implements OnInit {
  searchStr = '';

  // searchText;
  constructor(public mod1: Mod1Service) {}

  ngOnInit(): void {
    this.mod1.initUsers();
  }
}
