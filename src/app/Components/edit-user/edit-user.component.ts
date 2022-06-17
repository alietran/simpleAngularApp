import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Models/user.model';
import { UserService } from 'src/app/Services/user.service';
import { UserListComponent } from '../user-list/user-list.component';
import { formatDate, Location } from '@angular/common';
import * as alertify from 'alertifyjs';
import Swal from 'sweetalert2';
interface Status {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  // @Input() userItem: User[] = [];
 today: Date;
  // @Input() idEdit1 : any;
    selectedValue:string ;
  id: number =0;
   foods: Status[] = [
    {value: 'true', viewValue: 'Active'},
    {value: 'false', viewValue: 'Suspended'},
  ];


  // dataUser =""
    editUserForm= new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      dob: new FormControl(''),
      status: new FormControl(''),
       socialLink: new FormGroup({
        facebook: new FormControl(''),
        linkedin: new FormControl(''),
        twitter: new FormControl(''),

      }),
    })
  constructor(private api: UserService, private route: ActivatedRoute, private location: Location,private router: Router) {

  }
//  getStatus(){
//     this.statusSelected = this.editUserForm.get('status')
//   }
          ngOnInit(): void {
          this.id= this.route.snapshot.params['id'];
          console.log( this.id)
          // console.log("this.dataUser",this.idEdit1);
          this.api.getUserDetail(this.id).subscribe((data : any) => {
            console.log("dataUser",data);
            // toString:boolean sang string
            this.selectedValue =  data.status;
            const string =  this.selectedValue .toString()
            this.selectedValue = string;
                    this.editUserForm = new FormGroup({
                        firstname: new FormControl( data.firstname),
                        lastname: new FormControl( data.lastname),
                        email: new FormControl( data.email),
                        phone: new FormControl( data.phone),
                        dob: new FormControl( formatDate(data.dob,'yyyy-MM-dd', 'en')),
                        status: new FormControl( data.status),
                        socialLink: new FormGroup({
                          facebook: new FormControl(data.socialLink['facebook']),
                          linkedin: new FormControl(data.socialLink['linkedin']),
                          twitter: new FormControl( data.socialLink['twitter']),

                          }),

                    })

                  })}

        onUpdate()   {
          this.api.editUser(this.id, this.editUserForm.value).subscribe(data=>{
            // console.log("this.editUserForm.value",this.editUserForm.value);
               this.router.navigate(['admin'])
              //  setTimeout(()=>{
              //    alertify.success('Success message');
              //  },300)
                Swal.fire({
                icon: 'success',
                title: 'Edit Successfully',
                showConfirmButton: false,
                timer: 2000,
                width:250,
                position: 'top-right',
              customClass: 'swal2-toast',
                backdrop: false
            })

          })

        }
        back(){
          this.api.back();
        }

  }
