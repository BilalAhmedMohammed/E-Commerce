import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ConfirmedValidator } from '../../confirmed.validator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private FB:FormBuilder) {
    this.loginForm=this.FB.group({
      name:['',Validators.required],
      emailAddress:['',[
        Validators.required,Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')
      ]],
      userName:['',[Validators.required,Validators.pattern('^[^\r\n\t\f\v ]*$')]],
      password:['',[Validators.required,Validators.minLength(8),Validators.pattern('^(?:(?:(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]))|(?:(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[a-z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))).{8,32}$')]],
      confirmPassword:['',
      [Validators.required,Validators.minLength(8),Validators.pattern('^(?:(?:(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]))|(?:(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[a-z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))).{8,32}$')]]
    },{
      validator:ConfirmedValidator('password','confirmPassword')
    })
   }
   get formControls() {
    return this.loginForm.controls;
  }
  submitloginForm() {
    console.log(this.loginForm);
  }
  // canExit() : boolean {
 
  //   if (confirm("Do you want to Leave Registration Page !!??")) {
  //       return true;
  //     }
  //       return false;
  //   }
  ngOnInit(): void {
  }

}
