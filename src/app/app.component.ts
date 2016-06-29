import { Component } from '@angular/core';


//import 'rxjs/add/operator/map';

import { MainPageComponent } from './main-page/';

@Component({
  moduleId: module.id,
  selector: 'lsq-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [MainPageComponent]
})
export class AppComponent {

  constructor() {
  }

}
