import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Routing_Example';

  constructor() {

  }
  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]{2,}')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    age: new FormControl('', [Validators.required, Validators.maxLength(3)]),
    gender: new FormControl('', Validators.required)
  })
  userSignUp() {
    console.log(this.signupForm);

  }
  get user() {
    return this.signupForm.get('name');

  }
  get email() {
    return this.signupForm.get('email');

  }
  get phone() {
    return this.signupForm.get('phone');

  }
  get age() {
    return this.signupForm.get('age')
  }
}

