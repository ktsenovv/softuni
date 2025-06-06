import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';
import { Theme } from 'src/app/types/theme';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-current-theme',
  templateUrl: './current-theme.component.html',
  styleUrls: ['./current-theme.component.css'],
})
export class CurrentThemeComponent implements OnInit {
  theme = {} as Theme;

  constructor(
    private activatedRoute: ActivatedRoute,
    private themeService: ThemeService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const themeId = params.get('themeId') || '';

      this.themeService.getTheme(themeId).subscribe((theme) => {
        this.theme = theme;
      });
    });
  }

  get userData() {
    return this.userService;
  }
}
