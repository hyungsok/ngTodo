import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mydate'
})
export class MydatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // console.log('value:', value, ', args:', args);
    // 첫번째 파라메터는 파이프 앞의 문자열
    // 두번째 파라메터는 mydate 다음 문자열
    return value.substring(0, 16);
  }

}
