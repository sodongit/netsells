import {FormControl} from '@angular/forms';

export function PhoneNumber() {
  return function (control: FormControl) {
    // validate the file type
    const regEx = /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|\#)\d{3,4})?$/;
    return control.dirty &&
    control.value.length > 0 &&
    regEx.test(control.value) ?
    null:
    {
      phoneNumber: true
    };
  }
}
