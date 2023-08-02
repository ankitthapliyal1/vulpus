import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  constructor() { }

  filter: any = [
    "Platform",
    "Availablity",
    "Franchise",
    "Category",
    "Price",
    "ESRB rating",
    "No. of player",

  ]

  hotGames= [
    { name: "Ludo King", img: "casino-night-background_1302-12569.png", price: '199' },
    { name: "Cash Game", img: "mario.png", price: '199' },
    { name: "Cash Game", img: "mobile-royale-1.png", price: '199' },
   
  ]

  history =[
    { name: "Ludo King", img: "casino-night-background_1302-12569.png", price: '199' },
    { name: "Cash Game", img: "maxresdefault.png", price: '199' },
    { name: "Cash Game", img: "mario.png", price: '199' },
    { name: "Cash Game", img: "mobile-royale-1.png", price: '199' },
    { name: "Cash Game", img: "mario.png", price: '199' },
   
  ]

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

  logo = [
    {img:'Bethesda.png' },
    {img:'zynga.png' },
    {img:'xx.png' },
    {img:'stinger.png' },
    {img:'Maxis.png' },
    {img:'Bethesda.png' },
    {img:'zynga.png' },
    {img:'xx.png' },
  ]

  ngOnInit(): void {
  }



}
