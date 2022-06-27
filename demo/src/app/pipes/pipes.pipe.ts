import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipes'
})
export class PipesPipe implements PipeTransform {
  transform(value: string, code?: string): unknown {
    if (code == "USA") return "+1" + value;
    return "+91" + value;
  }
}
