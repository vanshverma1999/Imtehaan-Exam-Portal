import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  uid:any;
  user:any;
  categories:any;
  constructor(
    private _route:ActivatedRoute,
    private _cat:CategoryService,
    private _snack: MatSnackBar,
    private _login:LoginService,
  ) { }

  ngOnInit(): void {
    this.user=this._login.getUser();
    this.uid=this.user.id;
    this._cat.categories().subscribe(
      (data: any)=>{
        this.categories=data;
      },(error)=>{
        this._snack.open('Error a gyi bhai from server!','',{duration:3000})
      }
    )
  }

}
