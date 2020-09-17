import { Component, OnInit } from '@angular/core';
import { CreateuserService } from '../createuser.service';
import { User } from '../user';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  user: User=new User("","",0,"")
  message: any
  constructor(private service:CreateuserService) { }

  ngOnInit() {
  }

  public register(){
let resp=this.service.saveUser(this.user);
resp.subscribe((data)=>this.message=data)
  }
}
