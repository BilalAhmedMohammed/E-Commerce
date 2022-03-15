import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'check'
})
export class CheckPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): any {
    if(value==0)
    {
      return "not available in stock";
    }
    return 'In stock';
  }

}
