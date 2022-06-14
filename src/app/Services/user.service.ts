import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/user.model';
import {map} from "rxjs/operators";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
 user: User[] = [];
  api="https://62a6bd07bedc4ca6d7b90ebe.mockapi.io/api/users";

  constructor(private http: HttpClient) { }
    getAllUser():Observable<User[]>{
    return this.http.get<User[]>(this.api).pipe(map(res => {
      return res
    }))
  }
}
