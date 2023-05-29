import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  email:any
  password:any
  contact:any

  constructor(private authService:AuthServiceService,private router: Router) { }

  ngOnInit() {

  }

  login(){
    console.log(this.email + this.password);
    
    this.authService.loginUser(this.email,this.password).then((resp)=>{
     
        if(resp.user){
          this.router.navigate(['/home'])
        }
        
    })
  }

}
