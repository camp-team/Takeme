import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { auth, User } from 'firebase/app';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  afUser$: Observable<User> = this.afAuth.authState.pipe(
    switchMap((afUser) => {
      if (afUser) {
        return this.db.doc<User>(`users/${afUser.uid}`).valueChanges();
      } else {
        return of(null);
      }
    })
  );

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private snackBar: MatSnackBar,
    private db: AngularFirestore
  ) {
    this.afUser$.subscribe((user) => console.log(user));
  }
  createUser(params: { email: string; password: string }) {
    this.afAuth
      .createUserWithEmailAndPassword(params.email, params.password)
      .then((result) => {
        result.user.sendEmailVerification();
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/email-already-in-use':
            alert('このアドレスは既に登録されています。');
            break;
          case 'auth/invalid-email':
            alert('メールアドレスが不正です');
            break;
        }
      });
    this.afAuth.user.subscribe((authUser) => {
      console.log(this.afAuth.emailVerified);
    });
  }

  resetPassword(email: string) {
    this.afAuth.sendPasswordResetEmail(email).catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case 'auth/user-not-found':
          alert('このメールアドレスのユーザーは見つかりません');
          break;
        case 'auth/wrong-password':
          alert('パスワードが間違っています');
          break;
        case 'auth/invalid-email':
          alert('メールアドレスが不正です');
          break;
      }
    });
  }
  login(params: { email: string; password: string }) {
    this.afAuth
      .signInWithEmailAndPassword(params.email, params.password)
      .catch((error) => {
        switch (error.code) {
          case 'auth/user-not-found':
            alert('このメールアドレスのユーザーは見つかりません');
            break;
          case 'auth/wrong-password':
            alert('パスワードが間違っています');
            break;
          case 'auth/invalid-email':
            alert('メールアドレスが不正です');
            break;
        }
      });
  }
  facebooklogin() {
    const provider = new auth.FacebookAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    return this.afAuth.signInWithPopup(provider).then(() => {
      this.snackBar.open('ようこそ', null, {
        duration: 2000,
      });
    });
  }
  twitterlogin() {
    const provider = new auth.TwitterAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    return this.afAuth.signInWithPopup(provider).then(() => {
      this.snackBar.open('ようこそ', null, {
        duration: 2000,
      });
    });
  }
  googlelogin() {
    const provider = new auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    return this.afAuth.signInWithPopup(provider).then(() => {
      this.snackBar.open('ようこそ', null, {
        duration: 2000,
      });
    });
  }

  logout() {
    this.afAuth.signOut().then(() => {
      this.snackBar.open('ログアウトしました', null, {
        duration: 2000,
      });
    });
    this.router.navigateByUrl('/');
  }
}
