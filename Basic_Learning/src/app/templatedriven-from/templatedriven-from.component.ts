import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatedriven-from',
  templateUrl: './templatedriven-from.component.html',
  styleUrls: ['./templatedriven-from.component.css']
})
export class TemplatedrivenFromComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  UserLogin(item:any){
    console.log(item)
  }
  display(data: any)
  {
    console.log(data);
  }
}
