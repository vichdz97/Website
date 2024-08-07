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
      title: "Pokémon Generator",
      img: "pokemon.png",
      tech: ["pokeapi", "react", "typescript", "bootstrap"],
      description: `Unleash any Pokémon with this random generator 
                    that reveals its sprite and game stats.`,
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
      title: "Authentication System", 
      img: "authsys-progress.png",
      tech: ["aws", "mysql", "java", "spring-boot", "angular", "bootstrap", "postman"],
      description: `A dynamic web app that redirects users to the 
                    correct landing page based on their login credentials.`,
      // url: "http://authentication-system.s3-website.us-east-2.amazonaws.com/#/login",
      github: "https://github.com/vichdz97/Authentication-System"
    }
  ];

  constructor(private titleService: Title) {
    this.titleService.setTitle("Victor Hernandez, Jr. | Projects");
  }

}
