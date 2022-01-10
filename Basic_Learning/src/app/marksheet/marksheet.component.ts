import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-marksheet',
  templateUrl: './marksheet.component.html',
  styleUrls: ['./marksheet.component.css']
})
export class MarksheetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  RNO = [1, 2, 3, 4, 5];
  marksheet = new FormGroup({
    standard: new FormControl('', [Validators.required]),
    rollno: new FormControl('', [Validators.required]),
    addsubject: new FormArray([ new FormControl('',Validators.required,)])
  })

  addSubject(){
    const control = new FormControl('', [Validators.required]);
    (<FormArray> this.marksheet.get('addsubject')).push(control);
  }
  RemoveInput(idx: number){
    (<FormArray>this.marksheet.get('addsubject')).removeAt(idx);
  }
  displayMarks() {
    console.log(this.marksheet.value);
  }
  get AddSubject()
  {
    return (<FormArray>this.marksheet.get('addsubject'));
  }
  get standard()
  {
    return this.marksheet.get('standard')
  }
  get rollno()
  {
    return this.marksheet.get('rollno')
  }
  get subject()
  {
    return this.marksheet.get('addsubject')
  }
  

}