import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers', //se lo scrivo così posso inserire nell'html direttamente <app-servers>
  //selector: '[app-servers]', //se lo scrivo così devo inserire app servers in un div!
  selector: '.app-servers', //se lo scrivo così invece app-server deve essere il nome della classe all'interno di un div
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server created';
  serverName = 'TestServer';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server created ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
