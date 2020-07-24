import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  user$ = this.authService.afUser$;
  isProcessing: boolean;
  constructor(private authService: AuthService, private dialog: MatDialog) {}

  login() {
    this.dialog.open(LoginDialogComponent);
  }

  facebookLogin() {
    this.authService.facebooklogin();
  }
  twitterLogin() {
    this.authService.twitterlogin();
  }
  googleLogin() {
    this.authService.googlelogin();
  }
  logout() {
    this.authService.logout();
  }
}
