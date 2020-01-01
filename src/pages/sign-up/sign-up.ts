import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { FormGroup, AbstractControl, Validators, FormBuilder } from '@angular/forms';
import { Storage } from '@ionic/storage';


@IonicPage({
  name: "signup"
})
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  formgroup: FormGroup;
  name:AbstractControl;
  password:AbstractControl;
  email: AbstractControl;
  mnumber: AbstractControl;

  nam:any;
  passwor:any;
  emai: any;
  mnumbe: any;

  data: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, private storage: Storage) {
  
    this.formgroup = formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required,Validators.minLength(6),Validators.pattern('[a-zA-Z0-9 ]*')])],
      email: ['', Validators.compose([Validators.required,Validators.pattern('[^ @]*@[^ @]*')])],
      mnumber: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
    });

    this.name = this.formgroup.controls['name'];
    this.password = this.formgroup.controls['password'];
    this.email = this.formgroup.controls['email'];
    this.mnumber = this.formgroup.controls['mnumber'];

}
  ionViewDidLoad()
  {
    console.log('ionViewDidLoad SignUpPage');
  }

  store()
  {
    let userdata= {
      'uname': this.nam,
      'upassword': this.passwor,
      'uemai': this.emai,
      'umnumber': this.mnumbe
    }


    this.storage.set(this.data, userdata);  //this stored user info, such as name email etc, and 
                                            //binds them to a key named this.data
    this.navCtrl.popToRoot();   //this line then sends the user back to root page which is atm HomePage
  }

  

}
