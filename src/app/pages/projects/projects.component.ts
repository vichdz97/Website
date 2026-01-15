import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = [
    { 
      title: "Authentication System", 
      img: "authsys.png",
      tech: ["angular", "firebase", "json", "postman", "tailwindcss"],
      description: `A dynamic web app that redirects users to the 
                    correct landing page based on their login credentials.`,
      url: "https://vichdz97.github.io/projects/authentication-system",
      github: "https://github.com/vichdz97/Authentication-System"
    },
    {
      title: "Weather App",
      img: "weather.png",
      tech: ["openweatherapi", "react", "typescript", "tailwindcss"],
      description: `An intuitive weather app inspired by Apple's weather interface, 
                    providing real-time forecasts and detailed weather information.`,
      url: "https://vichdz97.github.io/projects/weather-app",
      github: "https://github.com/vichdz97/weather-app"
    },
    {
      title: "Pokémon Generator",
      img: "pokemon.png",
      tech: ["pokeapi", "react", "typescript", "bootstrap"],
      description: `Unleash any Pokémon with this random generator 
                    that reveals its sprite and game stats.`,
      url: "https://vichdz97.github.io/projects/pokemon-generator",
      github: "https://github.com/vichdz97/pokemon-generator"
    },
    {
      title: "Calculator App",
      img: "calculator.png",
      tech: ["react", "typescript", "bootstrap"],
      description: `A simple calculator app that performs various
                    mathematical operations.`,
      url: "https://vichdz97.github.io/projects/calculator-app",
      github: "https://github.com/vichdz97/react-calculator"
    }
  ];

  constructor(private titleService: Title, private nav: NavigationService) {
    this.titleService.setTitle("Victor Hernandez, Jr. | Projects");
  }

  ngOnInit(): void {
    this.nav.activeLink = "projects";
  }
}
