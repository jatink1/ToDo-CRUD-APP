import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignUpPage } from '../sign-up/sign-up';
import { Storage } from '@ionic/storage';
import { FormGroup, AbstractControl,Validators, FormBuilder } from '@angular/forms';
import { DoListPage } from '../do-list/do-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  formgroup: FormGroup;
  email: AbstractControl;
  password: AbstractControl;

  uemail: any;
  upassword: any; 
  data: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, private storage: Storage) {

    this.formgroup = formBuilder.group({
      email: ['', Validators.compose([Validators.required,Validators.pattern('[^ @]*@[^ @]*')])],
      password: ['', Validators.compose([Validators.required,Validators.minLength(6),Validators.pattern('[a-zA-Z0-9 ]*')])],
    });

    this.email = this.formgroup.controls['email'];
    this.password = this.formgroup.controls['password'];

    
  }

  ionViewDidEnter()
  {
    console.log('No error till here log in page loaded');
  }

  sign()
  {
    this.navCtrl.push(SignUpPage);
    console.log('No error till here as this pushed to sign up page');
  }
 
  
  
  login()
  {
    this.storage.get(this.data).then((val)=>{  //this retrives entire value stored such as name etc and binds it to a variable named val
      console.log(val['uemai']);      //now single/individual value is taken out as needed by their key names already specified
      console.log(val['upassword']);
      if (this.email.value === val['uemai'] && this.password.value === val['upassword'])
      {
        this.storage.set('key', this.email.value); //this is for one time login thing 
        this.navCtrl.setRoot(DoListPage);          //(see app.componen.ts comments for detail)
        this.navCtrl.popToRoot();                  //if email and password are correct then rootPage is
      }                                            //now DoListPage and will take it the same.
    });
  }
}
