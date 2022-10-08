import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') signupForm: NgForm;
  defaultQuestion: string = 'pet';
  answer = ' ';
  submitted: boolean;

  user = {
    username: ' ',
    email: '',
    secretQuestion: '',
    answer: ''
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: 'test@email.it'
    //   },
    //   secret: 'teacher',
    //   questionAswer: 'nuvola'
    // })
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName,
        email: 'test@mail.it'
      }
    })
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    // console.log(this.signupForm);
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAswer;

    this.signupForm.reset();
  }


}
