import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateuserService {

  constructor(private http:HttpClient) { }

  public saveUser(user){
    console.log(user)
return this.http.post("http://mongo:8080/saveInMongo", user, {responseType: 'text' as 'json'})
  }
}