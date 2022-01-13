import { Component, OnInit } from '@angular/core';
import{ContactsService} from '../contacts.service';
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  constructor(private contactService: ContactsService) { }
  u_data: any = []; 
  ngOnInit(): void {
    console.log(this.contactService.getData())
    this.u_data = this.contactService.getData().default;
    console.log(this.u_data.users);
  }

}
