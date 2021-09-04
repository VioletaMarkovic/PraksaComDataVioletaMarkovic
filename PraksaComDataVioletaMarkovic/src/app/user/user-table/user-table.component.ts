import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { UserFormComponent } from '../user-form/user-form.component';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements OnInit {
  @Input() user?: User;
  displayedColumns: string[] = ['name', 'id', 'status', 'email'];
  dataSource = new MatTableDataSource<User>();

  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar,
    public dialogUserForm: MatDialog
  ) {}

  openForm() {
    this.dialogUserForm.open(UserFormComponent, { data: this.user });
  }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers() {
    this.userService.getUsers().subscribe(
      (res: any) => {
        this.dataSource.data = res.data as User[];
      },
      (error) => {
        console.log(error);
        this.snackBar.open('Greska', 'OK');
      }
    );
  }
}
