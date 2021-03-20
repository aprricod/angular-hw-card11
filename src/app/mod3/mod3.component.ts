import { Component, OnInit } from '@angular/core';
import { Mod1Service } from '../mod1/mod1.service';
import { User } from '../mod1/user.interface';

@Component({
  selector: 'app-mod3',
  templateUrl: './mod3.component.html',
  styleUrls: ['./mod3.component.css'],
})
export class Mod3Component implements OnInit {
  displayedColumns: string[] = ['name', 'username', 'email'];
  dataSource;
  constructor(private mod3: Mod1Service) {
    this.mod3.getUsers().subscribe((usersData: User[]) => {
      this.dataSource = usersData;
    });
  }

  ngOnInit(): void {}
}
