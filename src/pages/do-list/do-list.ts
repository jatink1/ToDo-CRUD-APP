import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController, Item } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { NewTaskPage } from '../new-task/new-task';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-do-list',
  templateUrl: 'do-list.html',
})
export class DoListPage {

  public todoList: Array<string>;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoListPage');
  }

  logout()
  {
    this.storage.set('key', 1);  //this will set 'key' to 1 after clicking logout and will set rootPage
    this.navCtrl.setRoot(HomePage); //as HomePage and will send there
    this.navCtrl.popToRoot();
  }

   ionViewDidEnter() {  //when entering this page it will check if list is empty,if empt then will initi
    this.todoList = JSON.parse(localStorage.getItem("todos"));     //to null
    if (!this.todoList) {
      this.todoList = [];
    }
  }

  delete(index: number) {         //this function will delete a certain task
    this.todoList.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todoList));
  }
   
  add() {              //will redirect to a new page to add new Task
    this.navCtrl.push(NewTaskPage);
  }
}


