import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any): any {

    let currentYear = new Date().getFullYear();
    let BirthYear = new Date(value).getFullYear();
    let userAge = currentYear - BirthYear;
    return userAge;
  }

}
