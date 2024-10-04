import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";

@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, RouterOutlet, DashboardComponent, 
            RouterModule, RouterLinkActive, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  msg: string = 'Passing from parent!!'
  title = 'abgular-check';
  receivedmsg: string = '';
  constructor(){
    console.log('Inside Parent Constructor...');
  }
  recivedDataFromChild(msg: string) {
    this.receivedmsg = msg;
  }
}
