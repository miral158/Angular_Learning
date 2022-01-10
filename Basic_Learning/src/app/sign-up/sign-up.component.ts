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
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone:new FormControl('', Validators.required),
    age:new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required)
  })
  userSignUp(){
  console.log(this.signupForm.value);
    
  }
  get user()
  {
    return this.signupForm.get('name');
    
  }
  get email()
  {
    return this.signupForm.get('email');
    
  }

}
