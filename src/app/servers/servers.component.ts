import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  //selector: '.app-servers',
  selector:'app-servers',
  templateUrl:'./servers.component.html',
  // template: `<app-server></app-server>
  //           <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serveCreationStatus = 'No server was created!, please create server';
  serverName = 'TestServer';
  serverCreated = false;
  servers =['TestServer', 'TestServer2'];
  constructor() {
      setTimeout(() =>{
        this.allowNewServer = true;
      }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serveCreationStatus ='Server was created and name is ' + this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
