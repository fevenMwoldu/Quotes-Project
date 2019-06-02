import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(createdOn: Date, args?: any): number {
    let now: Date = new Date();    
    return Math.floor((Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) - Date.UTC(createdOn.getFullYear(), createdOn.getMonth(), createdOn.getDate())) / 86400000);
  }

}
