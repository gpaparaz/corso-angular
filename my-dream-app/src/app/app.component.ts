import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //è lo stesso nome che andrà inserito in index
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Gio';
}
