import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private authService:AuthServiceService) {}
 signOut(){

  this.authService.signOut().then(() =>{
    
  })
 }
}
