import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  answer='';
  default='pet';
  genders =['male','female'];
  showResult:boolean =false;
  user:any={
     username:'',
     email: '',
     question:'',
     answer:'', 
      gender:''
}
  @ViewChild('form') loginFormData!: NgForm;
  defaultQuestion:string ='teacher'
  suggestUserName() {
   const suggestedName = 'SuperUser';
     this.loginFormData.setValue({
       userData: {
        username : suggestedName,
        email: ''
      },
      secret: 'pet',questionAnswer: '',
      gender: 'male'
    });
    //  this.loginFormData.form.patchValue({
    //   userData: {
    //     username: suggestedName
    //   }
    // }); 
  }
  
  
  /* saveFormData(formData:NgForm){
console.log(formData.value);
  } */
  saveFormData(){
    console.log(this.loginFormData);
    this.showResult=true;
this.user.username = this.loginFormData.value.userData.username;
this.user.email = this.loginFormData.value.userData.email;
this.user.question = this.loginFormData.value.secret;
this.user.answer = this.loginFormData.value.questionAnswer;
this.user.gender = this.loginFormData.value.gender;
console.log(this.user);
  }
reset(){
  this.showResult=false;
}
  
  
}
