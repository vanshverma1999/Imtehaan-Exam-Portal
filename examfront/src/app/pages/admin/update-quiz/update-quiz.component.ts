import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {
  categories=[{
    cid:'',
    title:''
  }
];
  constructor(private _route:ActivatedRoute,private _quiz:QuizService,private _categories:CategoryService,private _router:Router) { }

  qid = 0;
  quiz:any;

  ngOnInit(): void {

    this.qid = this._route.snapshot.params['qid'];
    //alert(this.qid);
    this._quiz.getQuiz(this.qid).subscribe(
      (data:any)=>{
        this.quiz = data;
        console.log(this.quiz);
      },
      (error)=>{
        console.log(error);
        Swal.fire("Error!","Something went wront! Try again later.","error");
      }
      );

      this._categories.categories().subscribe(
        (data:any)=>{
          //Categories loaded
          this.categories=data;
          console.log(this.categories);
        },
        (error)=>{
          console.log(error);
          Swal.fire("Error!","Somethine went wront!, Try again later.","error");
        }
      );
  }
  //Update form submit
  public updateData(){
    //alert("test");
    this._quiz.updateQuiz(this.quiz).subscribe(
      (data)=>{
        Swal.fire("Success!","Quiz has been updated","success").then((e)=>{
          this._router.navigate(['/admin/quizzes'])
        });
      },
      (error)=>{
        console.log(error);
        Swal.fire("Error!","Something went wront! Try again later","error");
      }
    );
  }
}
