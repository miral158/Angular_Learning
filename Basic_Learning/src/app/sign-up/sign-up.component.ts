import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms'
import 'bootstrap';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]{2,}')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone:new FormControl('', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    age:new FormControl('', [Validators.required, Validators.maxLength(3)]),
    gender: new FormControl('', Validators.required)
  })
  userSignUp(){
  console.log(this.signupForm);
    
  }
  get user()
  {
    return this.signupForm.get('name');
    
  }
  get email()
  {
    return this.signupForm.get('email');
    
  }
  get phone()
  {
    return this.signupForm.get('phone');
    
  }
  get age()
  {
    return this.signupForm.get('age')
  }
}
