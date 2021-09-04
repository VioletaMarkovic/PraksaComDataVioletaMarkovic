import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';
import { Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DialogModalComponent } from '../dialog-modal/dialog-modal.component';
@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  @Input() userCard?: User;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogModalComponent, { data: this.userCard });
  }

  ngOnInit(): void {}
}
