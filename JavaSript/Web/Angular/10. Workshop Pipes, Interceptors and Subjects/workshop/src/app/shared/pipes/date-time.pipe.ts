import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateTime',
})
export class DateTimePipe implements PipeTransform {
  transform(date: string, format: string): string {
    return moment(date).format(format);
  }
}
