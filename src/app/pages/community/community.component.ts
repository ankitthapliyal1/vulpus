import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {

  constructor() { }

  bestGames = [
    { name: "Ludo King", img: "casino-night-background_1302-12569.png", price: '199' },
    { name: "Cash Game", img: "maxresdefault.png", price: '199' },
    { name: "Cash Game", img: "mario.png", price: '199' },
    { name: "Cash Game", img: "mobile-royale-1.png", price: '199' },
    { name: "Cash Game", img: "mario.png", price: '199' },
    { name: "Ludo King", img: "casino-night-background_1302-12569.png", price: '199' },
    { name: "Cash Game", img: "mobile-royale-1.png", price: '199' },
    { name: "Cash Game", img: "gun.png", price: '199' },

  ]

  ngOnInit(): void {
  }

}
