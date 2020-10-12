import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from 'src/app/login-dialog/login-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  article;
  user$ = this.authService.afUser$;
  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private authService: AuthService,
    private dialog: MatDialog,
  ) {}

  shareTwitter() {
    this.snackBar.open('プロジェクトに参加しました', null, {
      duration: 4000,
    });
  }
  openDialog() {
    this.dialog.open(LoginDialogComponent);
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((map) => {
      const id = map.get('id');
      this.article = this.articleService.getArticle(id);
      console.log(this.article);
    });
  }
}
