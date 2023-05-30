import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { async } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(public ngFireAuth: AngularFireAuth) {

 
   }

   registerUser(email:string,password:string){
    return this.ngFireAuth.createUserWithEmailAndPassword(email, password);

   }

   loginUser(email:string,password:string){
    return this.ngFireAuth.signInWithEmailAndPassword(email, password);

   }

   resetPassword(email:string){
      return this.ngFireAuth.sendPasswordResetEmail(email);
  
   }
   getProfile(){
    return this.ngFireAuth.currentUser
   }

   signOut(){
    return  this.ngFireAuth.signOut();
   }


   
}