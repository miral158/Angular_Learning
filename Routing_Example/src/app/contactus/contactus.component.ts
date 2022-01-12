import { Component, OnInit } from '@angular/core';
import{ContactsService} from '../contacts.service';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
 
   constructor(private contactsService: ContactsService) { }

  contactList : any = [];
  ngOnInit(): void {
    this.contactList = this.contactsService.getContacts();
  }
}
