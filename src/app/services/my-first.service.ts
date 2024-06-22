import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {

  messages:Array<any> = [];

  constructor() { 
    this.init();
  }

  init():void{
    this.insert({
      name:'dana',
      email:'dana@gmail.com',
      message:'hello'
    })
    this.insert({
      name:'abey',
      email:'abey@gmail.com',
      message:'hello'
    })
  }

  insert(message:{name:String,email:String,message:String}):void{
    this.messages.push(message);
  }

  getAllMessages():any[]{
    return this.messages;
  }

  deleteMessage(index:number):void{
    this.messages.splice(index,1);
  }
}
