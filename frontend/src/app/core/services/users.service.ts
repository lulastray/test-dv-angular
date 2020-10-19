import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';


@Injectable()
export class UsersService {

  constructor(private http: HttpClient) {}

    private BASE_URL: String = "http://localhost:3000"

    getUsers(): Observable<any>{
      return this.http.get<any>(`${this.BASE_URL}/`)
    }
  
}
