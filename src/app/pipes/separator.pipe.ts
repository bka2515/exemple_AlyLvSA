import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'separator'
})
export class SeparatorPipe implements PipeTransform {
  constructor(){
    
  }

  transform(value: number, sep: string): string {
    return 'BBBBB';
  }

}
