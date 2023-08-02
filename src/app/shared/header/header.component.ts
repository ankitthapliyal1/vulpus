import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {



  constructor() {
    console.log(this.menuVariable)
    
   }

  menuVariable:boolean = false;
  menu_icon_variable:boolean = false

  openMenu(){
    this.menuVariable  = ! this.menuVariable;
    this.menu_icon_variable = ! this.menu_icon_variable
    console.log(this.menuVariable)
    console.log(this.menu_icon_variable)
  }

  close(){
    this.menuVariable = false
    this.menu_icon_variable = false
  }


 


  ngOnInit(): void {
  }

}
