import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import { ResultService } from 'src/app/services/result.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css']
})
export class AttemptsComponent implements OnInit {

  result:any;
  qid='';

  constructor(
    private _result:ResultService,
    private _user:UserService,
    private _quiz:QuizService,
    private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this.qid = this._route.snapshot.params['qid'];
    this._result.getResultByQuiz(this.qid).subscribe(
      (data)=>{
        this.result = data;
      },
      (error)=>{
        console.log(error);
        Swal.fire("Error!","Something went wrong! Try again later.","error");
      }
    );
  }

}
