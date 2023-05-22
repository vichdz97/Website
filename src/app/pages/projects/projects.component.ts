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
                    to the appropriate landing page given specific login credentials.`,
      url: "https://github.com/vichdz97/AuthenticationSystem"
    }, 
    { 
      title: "Library Management System",
      img: "library.png",
      tech: ["angular", "bootstrap", "java", "spring-boot"],
      description: `Created a dynamic web application that allows the user to 
                    manage books in a virtual library environment`,
      url: "https://github.com/vichdz97/Library-Management-System"
    }
  ];

  constructor(private titleService: Title) {
    this.titleService.setTitle("Victor Hernandez, Jr. | Projects");
  }

}
