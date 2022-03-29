import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';
import { QuestionService } from '../../../services/question.service';


@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit {

  qId: any;
  qTitle: any;
  questions : any = [];
  quiz : any =[];

  constructor(private _route: ActivatedRoute,
    private _question: QuestionService,
    private _quiz:QuizService,
  ) {}

  ngOnInit(): void {
    this.qId = this._route.snapshot.params['qid'];
    this.qTitle = this._route.snapshot.params['title'];
    this._question.getQuestionsOfQuiz(this.qId).subscribe((data: any) => {
      console.log(data)
      this.questions = data;
    },
      (error:any) => {
        console.log(error)
      })
  }
  deleteQuestion(qId:any){
    Swal.fire({
      icon:'warning',
      title:'Are you sure?',
      confirmButtonText : 'Delete',
      showCancelButton : true,
    }).then((result)=>{
      if(result.isConfirmed)
      {
        this._question.deleteQuestion(qId).subscribe(
          (data)=>{
            this.questions = this.questions.filter((questions:any)=>questions.quesId!=qId);
            Swal.fire("Success!","Question has been deleted","success").then((e)=>{
            });
          },
          (error)=>{
            Swal.fire("Error!","Something went wrong! Try again later.","error");
            console.log(error);
          }
        );
      }
    });
  }
}
