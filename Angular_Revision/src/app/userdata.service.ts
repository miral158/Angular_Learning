import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import countries from '../assets/user.json'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  private url: string = "../assets/user.json"

  constructor(private http: HttpClient) { }
   getdata(){
    const userList = [
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
    return userList;
  }
  getdatafromjson(){
    return countries;
  }
  getjsondatafromurl() {
    return this.http.get('http://localhost:3000/posts');
  }

  getdatawithobservable():Observable <object>
  {
    return this.http.get(this.url);
  }
}
