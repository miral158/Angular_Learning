import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  registration = new FormGroup(
    {
      firstName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]{2,}')]),
      lastName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]{1,}')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      gender: new FormControl('', [Validators.required]),
      hobbies: new FormArray([]),
      //description: new FormArray([])
    })

  onSubmit() {
    console.log(this.registration.value);
  }
  get fname() {
    return this.registration.get('firstName');
  }
  get lname() {
    return this.registration.get('lastName');
  }
  get email() {
    return this.registration.get('email');
  }
  get gender() {
    return this.registration.get('gender');
  }
  get hobbyControl() {
    return (<FormArray>this.registration.get('hobbies')).controls;
  }
  // get descriptionControl() {
  //   return (<FormArray>this.registration.get('description')).controls;
  // }
  addHobby() {
    let control = new FormControl('', [Validators.required]);
    //let control2 = new FormControl('', [Validators.required]);
    (<FormArray>this.registration.get('hobbies')).push(control);
    //(<FormArray>this.registration.get('description')).push(control2);
  }
}
