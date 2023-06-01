import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { async } from 'rxjs';
import firebase from 'firebase/compat/app';

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

   async signInWithPhoneNumber(phoneNumber: string) {
    const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    const confirmationResult = await this.ngFireAuth.signInWithPhoneNumber(phoneNumber, appVerifier);
    
    const verificationCode = window.prompt('Enter the verification code');
    
    if (verificationCode) {
      const userCredential = await confirmationResult.confirm(verificationCode);
      // User is now signed in
      console.log(userCredential.user);
    }
  }


   
}
