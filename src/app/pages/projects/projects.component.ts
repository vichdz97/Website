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
      tech: ["angular", "bootstrap", "java", "spring-boot"],
      description: `Designed a responsive web application that redirects the user 
                    to the appropriate landing page given specific login credentials`,
      url: "https://github.com/vichdz97/AuthenticationSystem"
    }, 
    { 
      title: "Library Management System",
      img: "library.png",
      tech: ["angular", "bootstrap", "java", "spring-boot"],
      description: `Created a dynamic web application that allows the user to 
                    manage books in a virtual library environment`,
      url: "https://github.com/vichdz97/Library-Management-System"
    },
    {
      title: "Bubbles Demo",
      img: "bubbles.png",
      tech: ["html", "css", "javascript"],
      description: `Coded an interactive web application that allows the user
                    to make music at the click of a button`,
      url: "https://github.com/vichdz97/bubbles",
      web: "https://bubbles-demo.victor-jr.com"
    }
  ];

  constructor(private titleService: Title) {
    this.titleService.setTitle("Victor Hernandez, Jr. | Projects");
  }

}
