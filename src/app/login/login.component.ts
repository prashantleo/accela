import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  formGroup:FormGroup;
  userData: any; // Save logged in user data
  User: any;
  UserEmail:any


  constructor(
    private authService:AuthServiceService,
    public router: Router
    ) {
    this.initForm();
  }

  ngOnInit() {}
  initForm(){
    this.formGroup= new FormGroup({
      email:new FormControl('',[Validators.required]),

    })
  }
  loginProcess(){
    if(this.formGroup.valid){
      this.authService.login(this.formGroup.value).subscribe(result=>{
        if(result.length!==0){
          this.userData=result[0]
          localStorage.setItem('user', JSON.stringify(this.userData.id));
         const users= JSON.parse(localStorage.getItem('user')|| '{}');
          console.log(users)
          console.log(result);

          this.router.navigate(['posts']);
          alert("login sucessful");

        }else{
          alert("login failed")
        }
      })
    }
  }
}
