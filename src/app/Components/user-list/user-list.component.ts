import { Component, OnInit, ViewChildren } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user.model';
import { UserService } from 'src/app/Services/user.service';
import Swal from 'sweetalert2';
import { EditUserComponent } from '../edit-user/edit-user.component';
interface Status {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
 public userList: User[] = [];
  page: number = 1 ;
  item : number = 5;
  statusSelected:string = "all";
  name: any;
  orderTitle : string = '';
  descOrder: boolean = true;
  fullname: string = "";
  dataUser: any;
  userStatus: boolean = true;
  showStatus : boolean =true;
  total: number;
  isChecked = true;
    foods: Status[] = [
    {value: 'all', viewValue: 'All'},
    {value: 'true', viewValue: 'Active'},
    {value: 'false', viewValue: 'Suspended'},
  ];
  // idUser: number;
  @ViewChildren(EditUserComponent) updateStatus : EditUserComponent;
  constructor(private api: UserService, private router:  Router) { }
  ngOnInit(): void {
    setTimeout(()=>{
        this.getUserList();
    },800)


  }

  getUserList(){
     this.api.getAllUser().subscribe((data:any)=>{
        for (var val of data) {
            //  val.dob =  val.dob?.slice(0,10);
            val.email = this.censorEmail(val.email)

        }
      this.userList = data;
      this.total = this.userList.length
        // console.log("userList",this.userList)
    })
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
        this.getUserList();
      }
      else{
        console.log("name",this.name)
        this.userList = this.userList.filter((res)=>{
          //  console.log(res.firstname.toLocaleLowerCase().match(this.name.toLocaleLowerCase()) || res.lastname.toLocaleLowerCase().match(this.name.toLocaleLowerCase()))
          return (res.firstname.toLocaleLowerCase().match(this.name.toLocaleLowerCase()) || res.lastname.toLocaleLowerCase().match(this.name.toLocaleLowerCase()))


          // console.log("res.firstname", res.firstname);
          // (res.firstname.toLocaleLowerCase().match(this.name.toLocaleLowerCase())) || (res.lastname.toLocaleLowerCase().match(this.name.toLocaleLowerCase()));
      })
      }
  }

  sort(titleName: string){
     console.log("this.descOrder first",this.descOrder)
    this.descOrder = !this.descOrder
    this.orderTitle = titleName; //fullname or phone or email
    console.log("this.descOrder",this.descOrder)
  }
    changeStatus(){
      this.page =1;
    }
    onDelete(id: number){
      this.api.deleteUser(id).subscribe(res=>{
      this.getUserList();
        //  Swal.fire({
        //         icon: 'success',
        //         title: 'Delete Successfully',
        //         showConfirmButton: false,
        //         timer: 2000,
        //         width:250,
        //         position: 'top-right',
        //       customClass: 'swal2-toast',
        //         backdrop: false
        //     })
      })

    }


    async changeStatusUser(id:number){
        // console.log("  console.log(this.updateStatus?.editUserForm);",this.updateStatus.editUserForm.status);
      this.api.getUserDetail(id).subscribe(async(data : any) => {
      data.status = !data.status;
      (await this.api.editUser(id, data)).subscribe(data=>{
            console.log("dataStatus1",data.status)
            this.getUserList();
          })
      })
      localStorage.setItem("isChanged","true");
    }
    logout(){
      localStorage.setItem(("isLogin"),"false")
      this.router.navigate(['login'])
    }
}
