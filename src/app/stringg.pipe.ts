import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringg',
  standalone: true
})
export class StringgPipe implements PipeTransform {

  transform(value: String, ...args: unknown[]): unknown {
    return value.substring(0, 2);
  }

}
