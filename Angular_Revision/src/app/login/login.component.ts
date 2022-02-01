import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userdata: any = [];
  udata: any = [];
  user_data: any = [];
  u_data$: any = [];
  constructor(private userdataservice: UserdataService) { }

  ngOnInit(): void {
    this.userdata = this.userdataservice.getdata();
    this.udata = this.userdataservice.getdatafromjson();
    this.userdataservice.getjsondatafromurl().subscribe(data => {
      this.user_data = data;
    })
    this.userdataservice.getdatawithobservable().subscribe(d=>{
      this.u_data$ = d;
    },error=>{
      console.log(error);
    })
  }

}
