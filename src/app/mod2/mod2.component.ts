import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Mod1Service } from '../mod1/mod1.service';
import { User } from '../mod1/user.interface';

@Component({
  selector: 'app-mod2',
  templateUrl: './mod2.component.html',
  styleUrls: ['./mod2.component.css'],
})
export class Mod2Component {
  displayedColumns: string[] = ['name', 'username', 'email'];
  dataSource;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private mod2: Mod1Service) {
    this.mod2.getUsers().subscribe((ELEMENT_DATA: User[]) => {
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    });
  }
}
