import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  e_store = [
    {name:"Cash Game", img:"maxresdefault.png" , price:'199'},
    {name:"Ludo King", img:"casino-night-background_1302-12569.png", price:'199'},
    {name:"Cash Game", img:"mobile-royale-1.png", price:'199'},
    {name:"Cash Game", img:"mario.png", price:'199'},
    
  ]

  bestGames = [
    {name:"Cash Game", img:"maxresdefault.png" , price:'199'},
    {name:"Ludo King", img:"casino-night-background_1302-12569.png", price:'199'},
    {name:"Cash Game", img:"mobile-royale-1.png", price:'199'},
    {name:"Cash Game", img:"mario.png", price:'199'},
    {name:"Cash Game", img:"maxresdefault.png" , price:'199'},
    {name:"Ludo King", img:"casino-night-background_1302-12569.png", price:'199'},
    {name:"Cash Game", img:"mobile-royale-1.png", price:'199'},
    {name:"Cash Game", img:"mario.png", price:'199'},

  ]

  games = [
    {name:"A2C 3D Poker Game", img:"casino-background_1302-20321.png", desc:"Celebrate the classic that gave a rocket start to racing around the Mushroom Kingdom with the Super Mario Kart™ Tour"},
    {name:"Clash of Clans 3D", img:"maxresdefault.png", desc:"Celebrate the classic that gave a rocket start to racing around the Mushroom Kingdom with the Super Mario Kart™ Tour"},
    {name:"Super Royal Rummy 3D", img:"casino-night-background_1302-12569.png", desc:"Celebrate the classic that gave a rocket start to racing around the Mushroom Kingdom with the Super Mario Kart™ Tour"},
    {name:"Battle Jack 3D Game", img:"batteljack.png", desc:"Celebrate the classic that gave a rocket start to racing around the Mushroom Kingdom with the Super Mario Kart™ Tour"},
    {name:"Empire of Puzzles Game", img:"Empires-and-Puzzles1.png", desc:"Celebrate the classic that gave a rocket start to racing around the Mushroom Kingdom with the Super Mario Kart™ Tour"},
  ]



  ngOnInit(): void {
  }

}
