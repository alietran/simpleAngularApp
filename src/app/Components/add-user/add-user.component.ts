import * as alertify from 'alertifyjs';
import { formatDate } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user.model';
import { UserService } from 'src/app/Services/user.service';

interface Status {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  @Input() userListItem :User[];
  datepicker: string
 today: Date;
  foods: Status[] = [
    {value: 'true', viewValue: 'Active'},
    {value: 'false', viewValue: 'Suspended'},
  ];


      statusSelected:string = "";
      faceBookLink = '.+www.facebook.com\/[^\/]+$';
      linkedinLink='^https:\\/\\/[a-z]{2,3}\\.linkedin\\.com\\/.*$';
      twitterLink ='(https:\/\/twitter.com\/(?![a-zA-Z0-9_]+\/)([a-zA-Z0-9_]+))';




    addUserForm = new FormGroup({
      firstname: new FormControl('',Validators.required),
      lastname: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      phone: new FormControl('',Validators.required),
      dob: new FormControl(''),
      status: new FormControl('',Validators.required),
      socialLink: new FormGroup({
        facebook: new FormControl('',Validators.pattern(this.faceBookLink)),
        linkedin: new FormControl('',Validators.pattern(this.linkedinLink)),
        twitter: new FormControl('',Validators.pattern(this.twitterLink)),

      }),

    });

  constructor(private api: UserService,private router: Router) {
    console.log(this.addUserForm)
  }

  ngOnInit(): void {
  }


 onSubmit()
    {
     this.api.addNewUser(this.addUserForm.value).subscribe()
       this.addUserForm.reset()


        this.router.navigateByUrl('/admin/users');
 alertify.success('Success message');
       alertify.set('notifier','position', 'top-right');
       alertify.success( alertify.get('notifier','position'));

    };
      back(){
          this.api.back();
        }

}
