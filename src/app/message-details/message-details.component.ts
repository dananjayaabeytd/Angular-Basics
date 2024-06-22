import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrl: './message-details.component.scss'
})
export class MessageDetailsComponent {

  @Input() 
  message:any = {};

}
