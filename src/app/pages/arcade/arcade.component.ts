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
      title: "Tic-Tac-Toe",
      img: "tic-tac-toe.png",
      tech: ["react", "typescript", "bootstrap"],
      description: `Challenge a friend in this fast-paced Tic-Tac-Toe duel 
                    and see who can claim victory first!`,
      url: "https://tic-tac-toe.victor-jr.com",
      github: "https://github.com/vichdz97/tic-tac-toe"
    },
    {
      title: "Flip 'N Match",
      img: "flip-n-match.png",
      tech: ["html5", "css3", "javascript"],
      description: `Try and beat the clock in this interactive card matching game!`,
      url: "https://flip-n-match.victor-jr.com",
      github: "https://github.com/vichdz97/flip-n-match"
    },
    {
      title: "Piano Tap",
      img: "piano-tap.png",
      tech: ["html5", "css3", "javascript"],
      description: `Create your own music with a simple tap!`,
      url: "https://piano-tap.victor-jr.com",
      github: "https://github.com/vichdz97/Piano-Tap"
    },
  ];

  constructor(private titleServie: Title) {
    titleServie.setTitle("Victor Hernandez, Jr. | Arcade");
  }
}
