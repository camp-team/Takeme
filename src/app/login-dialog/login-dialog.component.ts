import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss'],
})
export class LoginDialogComponent implements OnInit {
  form = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  user$ = this.authService.afUser$;

  constructor(
    private authService: AuthService,
    private dialog: MatDialogRef<LoginDialogComponent>,
    private fb: FormBuilder
  ) {}
  register() {
    this.authService.createUser(this.form.value);
  }

  maillogin() {
    this.authService.login(this.form.value);
  }

  maillogout() {
    this.authService.logout();
  }

  resetPassword() {
    this.authService.resetPassword(this.form.value.email);
  }

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
