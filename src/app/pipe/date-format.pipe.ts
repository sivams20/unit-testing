import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(date: Date | string, format?: string): string {
    date = new Date(date);
    format = (format) ? format : 'yyyy-MM-dd'
    return new DatePipe('en-US').transform(date, format);
  }

}
