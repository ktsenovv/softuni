import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css'],
})
export class AddThemeComponent {
  constructor(private themeService: ThemeService) {}

  addTheme(ev: Event, themeName: string, postText: string) {
    ev.preventDefault();
    this.themeService.createTheme(themeName, postText).subscribe((data) => {
      console.log({ data });
    });
  }
}
