import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  skills = [
    { fileName: "c", name: "C Programming"}, 
    { fileName: "c++", name: "C++"}, 
    { fileName: "java", name: "Java"}, 
    { fileName: "spring-boot", name: "Spring Boot"}, 
    { fileName: "html", name: "HTML"}, 
    { fileName: "css", name: "CSS"}, 
    { fileName: "javascript", name: "JavaScript"}, 
    { fileName: "bootstrap", name: "Bootstrap"}, 
    { fileName: "python", name: "Python"}, 
    { fileName: "react", name: "React"}, 
    { fileName: "angular", name: "Angular"}, 
    { fileName: "typescript", name: "TypeScript"}, 
    { fileName: "postman", name: "Postman"}, 
    { fileName: "git", name: "Git"}, 
    { fileName: "vs", name: "VS Code"}, 
    { fileName: "intellij", name: "IntelliJ IDEA"}, 
    { fileName: "android-studio", name: "Android Studio"}
  ];

  projects = [
    { 
      title: "Authentication System", 
      tech: ["angular", "bootstrap", "java", "spring-boot", "azure"],
      description: `Designed a responsive web application that redirects the user 
                    to the appropriate landing page given specific login credentials.`,
      url: "CSTyyCap/AuthenticationSystem"
    }, 
    { 
      title: "Library Management System",
      tech: ["angular", "bootstrap", "java", "spring-boot"],
      description: `Created a dynamic web application that allows the user to 
                    manage books in a virtual library environment`,
      url: "NGT-Project-Team-B/Library-Management-System"
    }
  ];
}
