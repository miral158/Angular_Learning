import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Basic_Learning';
  UserDetails = 
  [{
    'name':'Miral',
    'email': 'miraldonda@gmail.com',
    'phone': '8460517779' 
  },
  {
    'name':'Khushi',
    'email': 'khushipatel@gmail.com',
    'phone': '8758946851' 
  },

];
  users = ['miral','ankit','ravi'];

  display = true;
  color ='blue';

}
