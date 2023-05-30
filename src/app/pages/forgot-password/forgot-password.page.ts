import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
email:any
  constructor(private authService:AuthServiceService) { }

  ngOnInit() {
  }

  reset(){
    this.authService.resetPassword(this.email).then( () =>{      
      console.log('sent'); //show confirmation dialog
    })
  }

}
