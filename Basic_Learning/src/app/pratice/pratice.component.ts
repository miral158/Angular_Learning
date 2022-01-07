import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pratice',
  template: `
    <div class="style">
        This is Practice Tutorial
    </div>
  `,
  styles: [
    `
    .style{
      color : red;
    }
    `
  ]
})
export class PraticeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
