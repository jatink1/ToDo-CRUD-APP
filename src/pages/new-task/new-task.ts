import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-task',
  templateUrl: 'new-task.html',
})
export class NewTaskPage {

  public todoList: Array<string>;
  public todoItem: string;

  constructor(public navCtrl: NavController, private nav: NavController, public navParams: NavParams) {

    this.todoList = JSON.parse(localStorage.getItem("todos")); 
    if(!this.todoList) { 
        this.todoList = [];  
    }
    this.todoItem = "";   

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewTaskPage');
  }
//the below code will the new task to local storage 
  save() {
    if (this.todoItem != "") //this checks is todoItem is not empty
    {
        this.todoList.push(this.todoItem); //then pushes list to item
        localStorage.setItem("todos", JSON.stringify(this.todoList)); // then saves the new task to list and
      this.nav.pop();                          //using JSON.stringify converts entire list into string
                                              //and save it with a key
    }
}

}
