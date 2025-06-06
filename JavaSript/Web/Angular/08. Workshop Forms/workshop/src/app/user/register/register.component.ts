import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/constants';
import { emailValidator } from 'src/app/shared/utils/email-validator';
import { passMatchValidator } from 'src/app/shared/utils/pass-match-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, emailValidator(EMAIL_DOMAINS)]],
    tel: [''],
    passGroup: this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(5)]],
        rePassword: ['', [Validators.required]],
      },
      {
        validators: [passMatchValidator('password', 'rePassword')],
      }
    ),
  });

  constructor(private fb: FormBuilder) {}

  get username() {
    return this.form.get('username');
  }

  get email() {
    return this.form.get('email');
  }

  get passGroup() {
    return this.form.get('passGroup');
  }

  get password() {
    return this.passGroup?.get('password');
  }

  get rePassword() {
    return this.passGroup?.get('rePassword');
  }

  register(): void {
    if (this.form.invalid) {
      return;
    }
  }
}
