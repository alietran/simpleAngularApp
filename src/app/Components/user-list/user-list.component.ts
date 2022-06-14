import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user.model';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
 public userList: User[] = [];
  page: number = 1 ;
  item : number = 5;
  statusSelected:boolean;
  name: any;
  orderTitle : string = '';
  descOrder: boolean = true;
  fullname: string = "";
  constructor(private api: UserService) { }
  ngOnInit(): void {
      
    this.api.getAllUser().subscribe((data:any)=>{
        for (var val of data) {
             val.dob =  val.dob.slice(0,10);
            val.email = this.censorEmail(val.email)
                
        }
      this.userList = data;
        console.log("userList",this.userList)
    })

  }
      ngOnChange(){
        this.changeStatus();
        
      }

    censorWord(str :any) {
        return str[0] + "*".repeat(str.length ) + str.slice(-1);
      }

    censorEmail (email:any){ {
        var parts = email?.split("@");
        var name = parts[0];
        var result = name.charAt(0);
        for(var i=1; i<name.length; i++) {
            result += "*";
        }
        result += "@";
        var domain = parts[1];
        result += domain.charAt(0);
        // index of lấy vị trí dâu châm
        var dot = domain.indexOf(".");
        for(var i=1; i<dot; i++) {
            result += "*";
        }
        // substring lấy tất cả những phần còn lại
        result += domain.substring(dot);

        return result;
        }
    }

    search(){
      if(this.name == "") {
        this.ngOnInit();
      }
      else{
        console.log("name",this.name)
        this.userList = this.userList.filter(res=>{
          return (res.firstname.toLocaleLowerCase().match(this.name.toLocaleLowerCase()));
          // || res.lastname.toLocaleLowerCase().match(this.name.toLocaleLowerCase()));
        })
      }
  }

  sort(titleName: string){
    this.descOrder = !this.descOrder
    this.orderTitle = titleName; //fullname or phone or email
  }


    changeStatus(){
      this.page =1;
    }
    onDelete(id: number){
      this.api.deleteUser(id).subscribe(res=>{
      this.ngOnInit()
      })

    }

}
