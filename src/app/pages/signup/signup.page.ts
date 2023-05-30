import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { log } from 'console';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  password:any
  email:any
  constructor(private authService:AuthServiceService,private router: Router) { 

  }

  ngOnInit() {
    // this.signUP()
  }
  signUP(email:string,password:string){
    console.log(email);
    
    this.authService.registerUser(email,password).then((res)=>{
      console.log(res);
      if(res.user){
        this.router.navigate(['/home']);
      }
    })
  }

}
