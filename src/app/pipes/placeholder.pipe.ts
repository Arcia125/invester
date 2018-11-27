import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placeholder'
})
export class PlaceholderPipe implements PipeTransform {

  transform(value: any, placeholder = '-'): any {
    return typeof value === null || value === null ? placeholder : value;
  }

}
