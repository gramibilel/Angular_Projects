import { Component, OnInit } from '@angular/core';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ChatTestV1';

  message: string;
  messages: string[] = [];
  constructor(private chatService: ChatService) {
   }

   sendMessage(){
     this.chatService.sendMessage(this.message);
     this.message = '';
   }

   ngOnInit(){
     this.chatService.getMessages().subscribe((message: string) => {
       this.messages.push(message);
     });
   }
}
