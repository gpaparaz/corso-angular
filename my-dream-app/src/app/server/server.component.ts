import { Component } from "@angular/core";

//doppiamo indicargli che non è una banale classe typescript ma un component
@Component({
    //configuro il component:
    selector: 'app-server',//ovvero come lo chiamerò nell'html
    templateUrl: './server.component.html' //file esterno
})
export class ServerComponent {


}