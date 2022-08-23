import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService) {
    this.formLogin = this.fb.group({
      email: "",
      password: ""
    })
  }

  ngOnInit(): void {
  }

  enviarForm(){
    this.loginService.post(this.formLogin.value).subscribe(data => {
      return console.log(data);
    })
  }

}
