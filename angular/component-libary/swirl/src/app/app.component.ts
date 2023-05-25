import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Absences';

  constructor(private router: Router) {
    router.events.subscribe((routerEvent) => {
      const route = this.router.url;

      switch (route) {
        case '/':
          this.title = 'Absences';
          break;
        case '/map-user':
          this.title = 'Map to Flip Users';
          break;
        default:
          this.title = '';
          break;
      }
    });
  }
}
