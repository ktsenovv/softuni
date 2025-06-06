import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';
import { emailValidator } from '../utils/email-validator';

@Directive({
  selector: '[appEmail]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailDirective,
      multi: true,
    },
  ],
})
export class EmailDirective implements Validator, OnChanges {
  @Input() appEmail: string[] = [];
  validator: ValidatorFn = () => null;

  constructor() {}

  validate(control: AbstractControl): ValidationErrors | null {
    return this.validator(control);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { currentValue } = changes['appEmail'];

    if (currentValue?.length) {
      this.validator = emailValidator(currentValue);
    }
  }
}

// Short way, but not good, calls everytime on typing on field
// ---
// export class EmailDirective implements Validator, OnChanges {
//   @Input() appEmail: string[] = [];
//   validator: ValidatorFn = () => null;

//   constructor() {}

//   validate(control: AbstractControl): ValidationErrors | null {
//     const validatorFn = emailValidator(this.appEmail);
//     return validatorFn(control);
//   }
// }
