import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.css']
})

export class ContentProjectionComponent implements OnInit {
  @Input() userData: any;
  @ContentChild('admin')
  adminTemplate: TemplateRef<any> | undefined
  constructor() { }
  ngOnInit(): void {
  }
  person = {
    name : 'miral',
    email: 'MiralDonda@gmail.com',
    dob: Date(),
    money: 100
  }

}
