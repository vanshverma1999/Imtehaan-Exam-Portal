import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  categories=[{
    cid:'',
    title:'Programming'
  }
];

  quizData = {
    title:'',
    description:'',
    maxMarks:'',
    numberOfQuestions:'',
    active:true,
    category:{
      cid:'',
    },
  };
  constructor(private _categories:CategoryService, private _snack:MatSnackBar, private _quiz:QuizService) { }

  ngOnInit(): void {
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
  addQuiz(){
    if(this.quizData.title.trim()=='' || this.quizData.title==null){
      this._snack.open("Title is required!","Okay!",{
        duration:3000
      });
      return;
    }
    if(this.quizData.description.trim()=='' || this.quizData.description==null){
      this._snack.open("Description is required!","Okay!",{
        duration:3000
      });
      return;
    }
    if(this.quizData.maxMarks=='' || this.quizData.maxMarks==null){
      this._snack.open("Max Marks is required!","Okay!",{
        duration:3000
      });
      return;
    }
    if(this.quizData.numberOfQuestions=='' || this.quizData.numberOfQuestions==null){
      this._snack.open("Number of questions is required!","Okay!",{
        duration:3000
      });
      return;
    }
    if(this.quizData.category.cid==''){
      this._snack.open("Category is required!","Okay!",{
        duration:3000
      });
      return;
    }
    
    //Call Server
    this._quiz.addQuiz(this.quizData).subscribe(
      (data:any)=>{
        Swal.fire("Success!","Quiz is successfully added.","success");
        this.quizData = {
          title:'',
          description:'',
          maxMarks:'',
          numberOfQuestions:'',
          active:true,
          category:{
            cid:'',
          },
        };
      },
      (error)=>{
        console.log(error);
        Swal.fire("Error!","Something went wrong! Try again later.","error")
      }
    );
  }
}
