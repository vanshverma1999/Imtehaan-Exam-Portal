import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  //add User
  public addUser(user:any)
  {
    return this.http.post(`${baseUrl}/user/`,user);
  }
  //updateUser
  public updateUser(user:any){
    return this.http.put(`${baseUrl}/user/`,user);
  }

  //Get user
  public getUser(id:any){
    return this.http.get(`${baseUrl}/user/id/${id}`);
  }

} 
