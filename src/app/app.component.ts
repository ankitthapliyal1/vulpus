import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vulpes';

  clientHeight:number

  constructor(private router: Router,){
    this.clientHeight = window.innerHeight; 
    
  }

}
