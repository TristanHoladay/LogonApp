import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/iuser';
import { Observable } from 'rxjs';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { IUserProfile } from '../interfaces/iuser-profile';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private http: HttpClient) { }

  post(userProfile: any): Observable<any> {
    return this.http.post<any>('https://reqres.in/api/registerUser', userProfile)
  }

}
