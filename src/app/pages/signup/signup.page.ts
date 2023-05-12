import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private authService:AuthServiceService) { 

  }

  ngOnInit() {
    this.signUP()
  }
  signUP(){
    this.authService.registerUser("nokwandama@gmail.com","password")
  }

}
