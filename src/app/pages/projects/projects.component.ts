import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects = [
    { 
      title: "Authentication System", 
      img: "authsys-progress.png",
      tech: ["aws", "mysql", "java", "spring-boot", "angular", "bootstrap", "postman"],
      description: `A responsive web application that redirects the user 
                    to the appropriate landing page given specific login credentials.`,
      // url: "http://authentication-system.s3-website.us-east-2.amazonaws.com/#/login",
      github: "https://github.com/vichdz97/Authentication-System"
    },
    {
      title: "Pokémon Generator",
      img: "pokemon.png",
      tech: ["pokeapi", "react", "typescript", "bootstrap"],
      description: `A random Pokémon generator that displays a Pokémon's sprite 
                    and game info.`,
      url: "https://pokemon-generator.victor-jr.com",
      github: "https://github.com/vichdz97/pokemon-generator"
    },
    {
      title: "Calculator App",
      img: "calculator.png",
      tech: ["react", "typescript", "bootstrap"],
      description: `A simple calculator app that performs various
                    mathematical operations.`,
      url: "https://calculator-app.victor-jr.com",
      github: "https://github.com/vichdz97/react-calculator"
    },
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
    }
  ];

  constructor(private titleService: Title) {
    this.titleService.setTitle("Victor Hernandez, Jr. | Projects");
  }

}
