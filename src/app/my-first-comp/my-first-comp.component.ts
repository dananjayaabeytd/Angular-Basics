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
  isSubmitted:boolean= false;
  
  onSubmit() :void{
    this.isSubmitted = true;
    console.log('Name: '+this.name);
    console.log('Email: '+this.email);
    console.log('Message: '+this.message);
  }

}
