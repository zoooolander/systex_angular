import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sqrt',
    standalone: true
})
export class SqrtPipe implements PipeTransform {
  transform(value: number): number {
    return Math.sqrt(value);
  }
}
