import { Component, OnInit } from '@angular/core';
import{ContactsService} from '../contacts.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private contactService: ContactsService) { }
  UserData: any = [];
  ngOnInit(): void {
    this.contactService.getJsonData().subscribe(data=>{
        this.UserData = data;
    });
  }

}
