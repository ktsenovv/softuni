import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/theme/theme.service';
import { Theme } from 'src/app/types/theme';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css'],
})
export class ThemesListComponent implements OnInit {
  themes: Theme[] = [];
  isLoading: boolean = true;

  constructor(private api: ThemeService, private userService: UserService) {}

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  // get userId(): string {
  //   return this.userService.user?.id || '';
  // }

  ngOnInit(): void {
    this.api.getThemes().subscribe((themes) => {
      this.themes = themes;

      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    });
  }

  isSubscribed(theme: Theme) {
    // const isSubscribedUser = theme.subscribers.find((s) => {
    //   return s === this.userService.user?.id;
    // });
    // return !!isSubscribedUser;
  }
}
