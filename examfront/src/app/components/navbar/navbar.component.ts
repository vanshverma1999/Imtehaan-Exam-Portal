import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;
  user:any = null;

  constructor(public login:LoginService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe(data=>{
      this.isLoggedIn = this.login.isLoggedIn();
      this.user = this.login.getUser();
    });
  }

  public logout(){
    
    //this.login.loginStatusSubject.next(false);
    Swal.fire({
      icon:'warning',
      title:'Are you sure?',
      confirmButtonText : 'Logout',
      showCancelButton : true,
    }).then((result)=>{
      if(result.isConfirmed)
      {
        this.login.logout();
      window.location.reload();
      }
    });
  }
}
