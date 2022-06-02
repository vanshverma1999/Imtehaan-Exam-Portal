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
    if(this.user.username=='' || this.user.username==null || !this.isValidEnrolNum(this.user.username)){
      //alert('Username is required!');
      this.snack.open('Please Enter a valid Username!','Okay!',{
        duration:3000,
      });
      return;
    }
    if(this.user.password=='' || this.user.password==null){
      //alert('Username is required!');
      this.snack.open('Password is required!','Okay!',{
        duration:3000,
      });
      return;
    }
    if(this.user.firstname=='' || this.user.firstname==null){
      //alert('Username is required!');
      this.snack.open('Firstname is required!','Okay!',{
        duration:3000,
      });
      return;
    }
    if(this.user.lastname=='' || this.user.lastname==null){
      //alert('Username is required!');
      this.snack.open('Lastname is required!','Okay!',{
        duration:3000,
      });
      return;
    }
    if(this.user.email=='' || this.user.email==null || !this.isValidEmail(this.user.email)){
      //alert('Username is required!');
      this.snack.open('Please Enter a valid Email','Okay!',{
        duration:3000,
      });
      return;
    }
    if(this.user.phone=='' || this.user.phone==null || !this.isValidPhone(this.user.phone)){
      //alert('Username is required!');
      this.snack.open('Please Enter a valid Phone Number','Okay!',{
        duration:3000,
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
        this.snack.open('Something went wrong\nTry again','Okay!',{
          duration:3000,
        });
      }
    )
    
  }
  isValidEmail(email:String){
    const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regularExpression.test(String(email).toLowerCase()); 
  }

  isValidEnrolNum(username: String){
    const regularExpression = /^[0-9]{11}$/;
    return regularExpression.test(String(username).toLowerCase()); 
  }

  isValidPhone(number : String){
    const regularExpression = /^[0-9]{10}$/;
    return regularExpression.test(String(number).toLowerCase()); 
  }
  //this.user
}
