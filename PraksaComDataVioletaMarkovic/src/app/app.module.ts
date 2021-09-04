import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
// THIRD PARTY
// MODULES
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
// import {MatToolbar} from '@angular/material/toolbar';
import { MatToolbarModule } from '@angular/material/toolbar';
// COMPONENTS
import { UserTabComponent } from './user/user-tab/user-tab.component';
import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserTableComponent } from './user/user-table/user-table.component';
import { UserCardComponent } from './user/user-card/user-card.component';
import { ToolbarComponent } from './user/toolbar/toolbar.component';
import { DialogModalComponent } from './user/dialog-modal/dialog-modal.component';
import { UserFormComponent } from './user/user-form/user-form.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './user/auth/token.interceptor';

// DIRECTIVES
// PIPES
// SERVICES

@NgModule({
  declarations: [
    AppComponent,
    UserTabComponent,
    UserTableComponent,
    UserCardComponent,
    UserListComponent,
    ToolbarComponent,
    DialogModalComponent,
    UserFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatDialogModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule,
    MatInputModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
