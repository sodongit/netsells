import {FormControl} from '@angular/forms';

export function FileType(types: string[]) {

  const correctFileType = fileTypeCheck(types);

  return function (control: FormControl) {
    // validate the file type
    return fileValueCheck(control.value) && !correctFileType(control.value.name) ?
      {
        fileType: true
      }:
      null;
  }
}

const fileValueCheck = (file) => {
  return file !== undefined &&
    file !== null &&
    typeof file.name === 'string' &&
    file.name !== '';
}

const fileTypeCheck = (types) => {
  return (fileName) => {
    // get the extension
    if (fileName) {
      const [name, extension] = fileName.split('.');
      // check the array of allowable file types
      return types.reduce((ac, type) => ac ? ac : type.toLowerCase() === extension.toLowerCase(), false)
    } else {
      return true;
    }
  }
}
