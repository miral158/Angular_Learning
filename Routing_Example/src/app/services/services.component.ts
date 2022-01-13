import { Component, OnInit } from '@angular/core';
import{ContactsService} from '../contacts.service';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  user_data:any = []
  constructor(private contactService: ContactsService) { }
  ngOnInit(): void {
    this.contactService.getConfig().subscribe(data =>{
      this.user_data = data;
    })
  }
}
