import { ValidatorFn } from '@angular/forms';

export function emailValidator(domains: string[]): ValidatorFn {
  const domainString = domains.join('|');
  const regExp = new RegExp(
    `[a-zA-Z]+(\.[a-zA-Z0-9]+)*@gmail\.(${domainString})`
  );

  return (control) => {
    const isEmailInvalid = control.value === '' || regExp.test(control.value);
    return isEmailInvalid ? null : { emailValidator: true };
  };
}
