import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersDataResponse } from 'src/app/models/user-data-response.model';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  newUser?: User;
  constructor(
    private dialogRef: MatDialogRef<UserFormComponent>,
    public service: UserService,
    @Inject(MAT_DIALOG_DATA) public user: User
  ) {
    // this.newUser = new User();
  }

  onSubmitTemplateBased() {
    this.createUser();
  }

  ngOnInit(): void {}

  createUser(): void {
    this.service.addUsers(this.user).subscribe((data: UsersDataResponse) => {
      this.dialogRef.close(this.user);
    });
  }
}
