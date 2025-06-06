import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/shared/utils/email-validator';
import { EMAIL_DOMAINS } from 'src/app/constants';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  showEditMode: boolean = false;

  form = this.fb.group({
    username: [
      this.user?.username,
      [Validators.required, Validators.minLength(5)],
    ],
    email: [
      this.user?.email,
      [Validators.required, emailValidator(EMAIL_DOMAINS)],
    ],
    phoneNumber: [this.user?.phoneNumber],
  });

  constructor(private fb: FormBuilder, private userService: UserService) {}

  get user() {
    return this.userService.user;
  }

  get username() {
    return this.form.get('username');
  }

  get email() {
    return this.form.get('email');
  }

  switchMode(): void {
    this.showEditMode = !this.showEditMode;
    this.form.reset({
      username: this.user?.username,
      email: this.user?.email,
      phoneNumber: this.user?.phoneNumber,
    });
  }

  saveProfile(): void {
    if (this.form.invalid) {
      return;
    }

    this.userService.edit(
      this.username?.value ?? '',
      this.email?.value ?? '',
      this.form.get('phoneNumber')?.value ?? ''
    );
    this.switchMode();
  }
}
