import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ThemeService } from '../theme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css'],
})
export class AddThemeComponent {
  constructor(private themeService: ThemeService, private router: Router) {}

  addTheme(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const { themeName, postText } = form.value;
    this.themeService.createTheme(themeName, postText).subscribe(() => {
      this.router.navigate(['/themes']);
    });
  }
}
