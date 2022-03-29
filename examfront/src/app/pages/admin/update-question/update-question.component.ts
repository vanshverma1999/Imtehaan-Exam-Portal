import { ANALYZE_FOR_ENTRY_COMPONENTS, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {

  quesid = '';
  question = {
    content: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: '',
  };

  
  constructor(
    private _route:ActivatedRoute,
    private _quesService:QuestionService,
    private _quizService:QuizService,
    private _router:Router,
  ) { }

  ngOnInit(): void {
    this.quesid = this._route.snapshot.params['quesId'];
    
    this._quesService.getQuestion(this.quesid).subscribe(
      (data:any)=>{
        this.question = data;
        console.log(this.question);
      },
      (error)=>{
        console.log(error);
        Swal.fire("Error!","Something went wrong! Try again later.","error");
      }
    );
    
  }

  //Update question
  public updateQuesData(){
    this._quesService.updateQues(this.question).subscribe(
      (data:any)=>{
        Swal.fire("Success!","Question has been updated","success").then((e)=>{
          this._router.navigate(['/admin/question'])
        });
      },
      (error)=>{
        console.log(error);
        Swal.fire("Error!","Something went wrong! Try again later","error");
      }
    );
  }
}
