import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userDisplayName'
})
export class UserDisplayNamePipe implements PipeTransform {

  transform(value: any, fullName = true): any {
    if (!value) {
      return null;
    }
    if (fullName) {
      return `${value.firstName} ${value.lastName}`;
    }
    return value.firstName;
  }

}
