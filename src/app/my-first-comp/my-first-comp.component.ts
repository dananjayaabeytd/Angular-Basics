import { Component, inject } from '@angular/core';
import { MyFirstService } from '../services/my-first.service';

@Component({
  selector: 'app-my-first-comp',
  templateUrl: './my-first-comp.component.html',
  styleUrl: './my-first-comp.component.scss'
})
export class MyFirstCompComponent {
  
  name:String= '';
  email:String= '';
  message:String= '';
  isSubmitted:boolean= false;
  messages:Array<any>= [];

  private service:MyFirstService = inject(MyFirstService)

  constructor(
    //private service:MyFirstService
  ){
    this.messages = this.service.getAllMessages();
    this.isSubmitted = this.messages.length > 0 
  }
  
  onSubmit() :void{
    this.isSubmitted = true;
    this.service.insert({
      'name':this.name,
      'email':this.email,
      'message':this.message
    })
    console.log(this.messages)
  }

  deleteMessage(index: number) {
    this.service.deleteMessage(index)
    }

}
