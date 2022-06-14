export class User
{
    id:number;
    firstname:string;
    lastname:string;
    email:string;
    phone:string;
    dob:Date;
    status: boolean;
    socialLink: Array<string>;
    constructor(id:number, firstname: string, lastname:string, email: string, phone: string, dob: Date,status: boolean,socialLink: Array<string>){
      this.id = id;
      this.firstname= firstname;
      this.lastname = lastname;
      this.email= email;
      this.phone = phone;
      this.dob = dob;
      this.status = status;
      this.socialLink= socialLink;

    }
}

