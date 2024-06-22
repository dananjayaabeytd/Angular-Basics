import { Component } from '@angular/core';

@Component({
  selector: 'app-my-first-comp',
  templateUrl: './my-first-comp.component.html',
  styleUrl: './my-first-comp.component.scss'
})
export class MyFirstCompComponent {
  
  name:String= '';
  email:String= '';
  message:String= '';
  isSubmitted:boolean= true;
  messages:Array<any>= [];
  
  onSubmit() :void{
    this.isSubmitted = true;
    this.messages.push({
      'name':this.name,
      'email':this.email,
      'message':this.message
    })
    console.log(this.messages)
  }

}
