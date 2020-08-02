import { Component, ViewChild } from '@angular/core';
import { AuthService } from './services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  user$ = this.authService.afUser$;
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  someMethod() {
    this.trigger.openMenu();
  }

  constructor(
    private authService: AuthService,
    private dialog: MatDialog,
    private matMenu: MatMenuModule
  ) {}

  openDialog() {
    this.dialog.open(LoginDialogComponent);
  }

  logout() {
    this.authService.logout();
  }
}
