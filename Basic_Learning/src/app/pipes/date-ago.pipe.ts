import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateAgo',
  pure: true
})
export class DateAgoPipe implements PipeTransform {
  transform(value: any): any {
    var mdate = new Date(value); // some mock date
    var milliseconds = mdate.getTime();
    var dif = Math.floor(((Date.now() - milliseconds) / 1000) / 86400);
    
    if (dif < 2) {
          return convertToNiceDate(value);
    }
    else {
        var datePipe = new DatePipe("en-US");
        value = datePipe.transform(value, 'MMM-dd-yyyy');
        return value;
    }
  }
}
function convertToNiceDate(time: string) 
{
    var date = new Date(time)
    const diff = (((new Date()).getTime() - date.getTime()) / 1000)
    const daydiff = Math.floor(diff / 86400);
    if (isNaN(daydiff) || daydiff < 0 || daydiff >= 31){
      return '';
    }
    else if (daydiff == 1) {
      return 'Yesterday'
    } 
    else (daydiff < 1) 
    {
        if (diff > 0 && diff < 1800) 
        {
            return 'Few minutes ago'
        }
        else if (diff > 1800 && diff < 3600) {
            return 'Half an hour ago'
        }
        else if  (diff > 3600 && diff < 7200) {
            return 'An hour ago'
        }
        else if  (diff > 7200 && diff < 14400) {
            return 'Few hours ago'
        }
        else if  (diff < 86400 && diff > 14400) {
            return 'Today'
        }
      return '';
}
}