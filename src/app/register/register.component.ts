import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Register } from '../model/register';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
   styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  usersList: any;
  
  constructor(public register_service: RegisterService){}

  ngOnInit(): void {
    this.restForm();
    this.loadUsers();
  }

  restForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.register_service.formData = {
      Id: 0,
      Name: '',
      Age: 0,
      Address:''
    } 
  }
  loadUsers(){
    this.register_service.loadUsers().subscribe(
      data=>{
        this.usersList =data as Register[];
        console.log(this.usersList);
      }
    )
  }
}
