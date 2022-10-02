import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Register } from '../model/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  readonly rootURL = 'https://localhost:44376/api/'
  formData: Register;
  constructor(private http:HttpClient) { }

  //--Read/Load Data service--//
  loadUsers(){
    return this.http.get(this.rootURL+'Users')
  }
}
