import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { User } from '../models/User';


@Injectable()
export class UsersService {

  constructor(private http: HttpClient) {}

    private BASE_URL: String = "http://localhost:3000"

    getUsers(): Observable<any>{
      return this.http.get<any>(`${this.BASE_URL}/`)
    }

    getOneUser(id:number) :Observable<any>{
      return this.http.get<any>(`${this.BASE_URL}/${id}`)
    }

    createUser(user:User): Observable<User> {
      return this.http.post<User>(`${this.BASE_URL}/create`, user)
    }
  
}
