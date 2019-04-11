import { Component, OnInit } from '@angular/core';
import { LoginDetails } from '../login-info'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginDetails: LoginDetails = new LoginDetails();
  isSubmitPass: boolean = false;
  isSubmitEmail: boolean = false;

  onSubmit(): void {
    this.isSubmitEmail = true;
    this.isSubmitPass = true;

    if (this.verifyInfo()) {
      console.log(this.loginDetails);
    }
  }

  onClickEmail(): void {
    this.isSubmitEmail = false;
  }

  onChangeEmail(email): void {
    this.loginDetails.email = email.viewModel;
  }

  onChangePass(pass): void {
    this.loginDetails.password = pass.viewModel;
  }

  verifyInfo(): boolean {
    if (this.loginDetails.email === undefined || this.loginDetails.password == undefined) {
      return false;
    } else {
      return true;
    }
  }

  onClickPass(): void {
    this.isSubmitPass = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
