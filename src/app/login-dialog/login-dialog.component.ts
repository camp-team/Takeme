import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss'],
})
export class LoginDialogComponent implements OnInit {
  user$ = this.authService.afUser$;

  constructor(
    private authService: AuthService,
    private dialog: MatDialogRef<LoginDialogComponent>,
    private fb: FormBuilder
  ) {}

  facebookLogin() {
    this.authService.facebooklogin().then(() => {
      this.dialog.close();
    });
  }
  twitterLogin() {
    this.authService.twitterlogin().then(() => {
      this.dialog.close();
    });
  }
  googleLogin() {
    this.authService.googlelogin().then(() => {
      this.dialog.close();
    });
  }

  ngOnInit(): void {}
}
