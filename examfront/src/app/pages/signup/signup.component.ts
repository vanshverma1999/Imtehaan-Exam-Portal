import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService,private snack:MatSnackBar) { }

  public user={
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
  };

  ngOnInit(): void {
  }

  formSubmit()
  {
    console.log(this.user);
    if(this.user.username=='' || this.user.username==null){
      //alert('Username is required!');
      this.snack.open('Username is required!','Okay!',{
        duration:3000,
        verticalPosition:'top',
        horizontalPosition:'center'
      });
      return;
    }

    //addUser : userService
    this.userService.addUser(this.user).subscribe(
      (data:any)=>{
        //success
        console.log(data);
        //alert('Success');
        Swal.fire('Successfully Done!','User is registered with ID : '+data.id,'success');
      },
      (error)=>{
        //error
        console.log(error);
        //alert('Something went wrong!');
        this.snack.open('Something went wrong.','Okay!',{
          duration:3000,
          verticalPosition:'top',
          horizontalPosition:'center'
        });
      }
    )
    
  }

  //this.user
}
