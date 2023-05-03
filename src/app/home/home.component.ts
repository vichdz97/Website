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

}
