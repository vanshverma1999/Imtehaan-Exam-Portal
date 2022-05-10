import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  constructor(private _route:ActivatedRoute, private  _user:UserService,private _router:Router) { }

  uid = 0;
  user:any;

  ngOnInit(): void {
    this.uid = this._route.snapshot.params['id'];
    //alert(this.uid);
    this._user.getUser(this.uid).subscribe(
      (data:any)=>{
        this.user = data;
        console.log(this.user);
      },
      (error)=>{
        console.log(error);
        Swal.fire("Error!","Something went wrong! Try again later.","error");
      }
    );
  }
  public updateData(){
    this._user.updateUser(this.user).subscribe(
      (data)=>{
        Swal.fire("Success!","User has been updated","success");
      },
      (error)=>{
        console.log(error);
        Swal.fire("Error!","Something went wront! Try again later","error");
      }
    );
  }
}