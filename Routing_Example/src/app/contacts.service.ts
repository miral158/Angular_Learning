import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  *  as  data  from  '../assets/user.json';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private httpClient : HttpClient) { }
  getContacts(){
    const contactList = [
      {
        contactId: 1,
        contactName: 'Miral',
        number:8460517779
      },
      {
        contactId: 2,
        contactName: 'Ankit',
        number:8460164824
      },
      {
        contactId: 3,
        contactName: 'Pinkal',
        number:8512364858
      }
    ];
    return contactList;
  }
  getJsonData()
  {
    return this.httpClient.get('http://localhost:3000/users');
  }
  getData()
  {
    return data;
  }
}