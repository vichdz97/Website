import { Component } from '@angular/core';

@Component({
  selector: 'app-my-arcade',
  templateUrl: './my-arcade.component.html',
  styleUrls: ['./my-arcade.component.css']
})
export class MyArcadeComponent {
  
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
    }
  ];

}