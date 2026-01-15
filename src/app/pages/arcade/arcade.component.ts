import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-arcade',
  templateUrl: './arcade.component.html',
  styleUrls: ['./arcade.component.css']
})
export class ArcadeComponent implements OnInit {

  games = [
    {
      title: "Tic-Tac-Toe",
      img: "tic-tac-toe.png",
      tech: ["react", "typescript", "bootstrap"],
      description: `Challenge a friend in this fast-paced Tic-Tac-Toe duel 
                    and see who can claim victory first!`,
      url: "https://vichdz97.github.io/arcade/tic-tac-toe",
      github: "https://github.com/vichdz97/tic-tac-toe"
    },
    {
      title: "Flip 'N Match",
      img: "flip-n-match.png",
      tech: ["html5", "css3", "javascript"],
      description: `Try and beat the clock in this interactive card matching game!`,
      url: "https://vichdz97.github.io/arcade/flip-n-match",
      github: "https://github.com/vichdz97/flip-n-match"
    },
    {
      title: "Piano Tap",
      img: "piano-tap.png",
      tech: ["html5", "css3", "javascript"],
      description: `Create your own music with a simple tap!`,
      url: "https://vichdz97.github.io/arcade/piano-tap",
      github: "https://github.com/vichdz97/Piano-Tap"
    },
  ];

  constructor(private titleService: Title, private nav: NavigationService) {
    this.titleService.setTitle("Victor Hernandez, Jr. | Arcade");
  }
  
  ngOnInit(): void {
      this.nav.activeLink = "arcade";
  }

}
