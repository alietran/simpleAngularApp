import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/Models/user.model';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  user :User[]
    addUserForm = new FormGroup({
      firstname: new FormControl('',Validators.required),
      lastname: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      phone: new FormControl('',Validators.required),
      dob: new FormControl(''),
      status: new FormControl('',Validators.required),
      social: new FormGroup({
        facebook: new FormControl(),
         linkedin: new FormControl(),
        twitter: new FormControl(),
       
      }),
    });
   
  constructor(private api: UserService) { }

  ngOnInit(): void {
   console.log(this.addUserForm)

  }
  ngOnChange(){}
    onSubmit()
    {
      // this.user =  new User()
      this.api.addNewUser(this.addUserForm.value).subscribe()
      //   this.api.getAllUser().subscribe((data:any)=>{
      //   for (var val of data) {
      //       val.dob =  val.dob.slice(0,10);
      //       val.email = this.censorEmail(val.email)
                
      //   }
      // this.userList = data;
      // }
  
    }

}
