import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterStatus'
})
export class FilterStatusPipe implements PipeTransform {

  transform(account: any[], status: boolean): any {
    console.log("value ",status + "")
    if(status === undefined || status.toString() === "all"){
     return  account = account
    }
    account =  account.filter(user=>{
        // console.log(user.status)
      return user.status.toString().indexOf(status + "") != -1;

    })
    return account;
  }


}
