import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/shared/utils/email-validator';
import { EMAIL_DOMAINS } from 'src/app/constants';
import { ProfileDetails } from 'src/app/types/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  showEditMode: boolean = false;

  profileDetails: ProfileDetails = {
    username: '',
    tel: '',
    email: '',
  };

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, emailValidator(EMAIL_DOMAINS)]],
    tel: [''],
  });

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    const { username, tel, email } = this.userService.user!;

    this.profileDetails = {
      username,
      tel,
      email,
    };

    this.form.setValue({
      username,
      tel,
      email,
    });
  }

  switchMode(): void {
    this.showEditMode = !this.showEditMode;
  }

  saveProfile(): void {
    if (this.form.invalid) {
      return;
    }

    this.profileDetails = this.form.value as ProfileDetails;
    const { username, email, tel } = this.profileDetails;

    this.userService.updateProfile(username, email, tel).subscribe(() => {
      this.switchMode();
    });
  }
}
