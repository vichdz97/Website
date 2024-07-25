import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-arcade',
  templateUrl: './arcade.component.html',
  styleUrls: ['./arcade.component.css']
})
export class ArcadeComponent {

  games = [
    {
      title: "Piano Tap",
      img: "piano-tap.png",
      tech: ["html", "css", "javascript"],
      description: `An interactive web application that allows the user
                    to make music with the tap of a tile.`,
      url: "https://piano-tap.victor-jr.com",
      github: "https://github.com/vichdz97/Piano-Tap"
    },
    {
      title: "Tic-Tac-Toe",
      img: "tic-tac-toe.png",
      tech: ["react", "typescript", "bootstrap"],
      description: `A fun, competitive 2-Player game of Tic-Tac-Toe.`,
      url: "https://tic-tac-toe.victor-jr.com",
      github: "https://github.com/vichdz97/tic-tac-toe"
    },
  ];

  constructor(private titleServie: Title) {
    titleServie.setTitle("Victor Hernandez, Jr. | Arcade");
  }
}
