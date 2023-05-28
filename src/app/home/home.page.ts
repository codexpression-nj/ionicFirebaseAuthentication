import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private authService:AuthServiceService,private router: Router) {}
 signOut(){

  this.authService.signOut().then(() =>{
    this.router.navigate(['/landing'])
  })
 }
}
