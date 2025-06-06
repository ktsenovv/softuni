import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css'],
})
export class AddThemeComponent {
  constructor(private themeService: ThemeService) {}

  addTheme(form: NgForm) {
    if (form.invalid) {
      return;
    }

    console.log(form.value);
  }
}
