import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function niedozwolonaNazwa(zabron: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const ok = control.value !== zabron;
    return ok ? null : {niedozwolonaNazwa: {value: control.value}};
  };
}
