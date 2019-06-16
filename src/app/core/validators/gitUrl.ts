import {FormControl} from '@angular/forms';

export function GitUrl() {
  return function (control: FormControl) {
    // validate the file type
    return control.value && control.value.includes('https://github.com/')?
      null :
      {
        gitUrl: true
      };
  }
}
