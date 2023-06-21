import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { async } from 'rxjs';
import firebase from 'firebase/compat/app';
import { error } from 'console';
import {
  CollectionReference,
  DocumentData,
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from '@firebase/firestore';
import { Firestore, collectionData, docData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  

  constructor(public ngFireAuth: AngularFireAuth) {

   }

   async registerUser(email:string,password:string,name:string){
     return await this.ngFireAuth.createUserWithEmailAndPassword(email, password)

   }

   async loginUser(email:string,password:string){
    return await this.ngFireAuth.signInWithEmailAndPassword(email, password);

   }

   async resetPassword(email:string){
      return await this.ngFireAuth.sendPasswordResetEmail(email);
  
   }
   async getProfile(){
    return await this.ngFireAuth.currentUser
   }

   async signOut(){
    return await this.ngFireAuth.signOut();
   }

   async signInWithPhoneNumber(phoneNumber: string) {
    
    const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    const confirmationResult = await this.ngFireAuth.signInWithPhoneNumber(phoneNumber, appVerifier)
    const verificationCode = window.prompt(phoneNumber + 'Enter the verification code');
    
    if (verificationCode) {
      const userCredential = await confirmationResult.confirm(verificationCode);
      // User is now signed in
      console.log(userCredential.user);
    }
  }


   
}
