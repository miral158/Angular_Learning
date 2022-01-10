import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
    marks: new FormControl('', [Validators.required])
  })

  displayMarks() {
    console.log(this.marksheet.value);
  }

  get standard()
  {
    return this.marksheet.get('standard')
  }
  get rollno()
  {
    return this.marksheet.get('rollno')
  }
  get marks()
  {
    return this.marksheet.get('marks')
  }

}