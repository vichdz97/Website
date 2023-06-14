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
      img: "authsys.png",
      tech: ["aws", "mysql", "java", "spring-boot", "angular", "bootstrap", "postman"],
      description: `A responsive web application that redirects the user 
                    to the appropriate landing page given specific login credentials.`,
      url: "http://authentication-system.s3-website.us-east-2.amazonaws.com/#/home",
      github: "https://github.com/vichdz97/Authentication-System"
    }, 
    { 
      title: "Library Management System",
      img: "library.png",
      tech: ["mysql", "java", "spring-boot", "angular", "bootstrap"],
      description: `A dynamic web application that allows the user to 
                    manage books in a virtual library environment.`,
      github: "https://github.com/vichdz97/Library-Management-System"
    },
    {
      title: "Piano Tap",
      img: "piano-tap.png",
      tech: ["html", "css", "javascript"],
      description: `An interactive web application that allows the user
                    to make pianic music with the click of a tile.`,
      url: "https://piano-tap.victor-jr.com",
      github: "https://github.com/vichdz97/Piano-Tap"
    },
    {
      title: "Calculator App",
      img: "calculator.png",
      tech: ["react", "typescript", "bootstrap"],
      description: `A simple calculator app that performs various
                    mathematical operations.`,
      url: "https://calculator-app.victor-jr.com",
      github: "https://github.com/vichdz97/react-calculator"
    }
  ];

  constructor(private titleService: Title) {
    this.titleService.setTitle("Victor Hernandez, Jr. | Projects");
  }

}
