import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.scss']
})
export class NestedFormComponent implements OnInit {
  
  constructor(private fb : FormBuilder) { 

  }
  myForm: FormGroup;
  
  ngOnInit(): void {
    
    this.myForm = this.fb.group({
      email:'',
      phones: this.fb.array([])
    })
  }
  get phoneForms(){
    return this.myForm.get('phones') as FormArray
  }
  addPhones(){
    const phone = this.fb.group({
      area:[],
      prefix:[],
      line:[]
    })
    this.phoneForms.push(phone)
  }
  deletePhones(i)
  {
    this.phoneForms.removeAt(i)
  }

} 
