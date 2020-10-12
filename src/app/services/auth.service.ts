import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { auth } from 'firebase/app';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../interfaces/user';
import { AngularFireFunctions } from '@angular/fire/functions';

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
    private db: AngularFirestore,
    private fns: AngularFireFunctions
  ) {}
  async createUser(): Promise<any> {
    if (this.afUser$) {
      await this.afAuth.signOut();
    }
    const authProvider = new auth.TwitterAuthProvider();

    const result = await this.afAuth.signInWithPopup(authProvider);

    const { accessToken, secret } = result.credential as any;

    this.db.doc(`users/${result.user.uid}/private/twitter`).set({
      accessToken,
      secret,
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

  tweet() {
    const callable = this.fns.httpsCallable('tweet');
    callable({
      body: 'ツイート内容',
    });
  }
}
