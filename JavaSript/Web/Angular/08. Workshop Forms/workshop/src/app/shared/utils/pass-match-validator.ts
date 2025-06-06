import { ValidatorFn } from '@angular/forms';

export function passMatchValidator(
  passwordControlName: string,
  rePassControlName: string
): ValidatorFn {
  return (control) => {
    const passwordFormControl = control.get(passwordControlName);
    const rePassFormControl = control.get(rePassControlName);
    const areMatching = passwordFormControl?.value == rePassFormControl?.value;

    return areMatching ? null : { passMatchValidator: true };
  };
}
