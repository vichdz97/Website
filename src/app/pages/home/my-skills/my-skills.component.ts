import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.css']
})
export class MySkillsComponent {

  // svgs found here -> https://devicon.dev
  skills = [
    { fileName: "amazonwebservices", name: "AWS"},
    { fileName: "androidstudio", name: "Android Studio"},
    { fileName: "angular", name: "Angular"},
    { fileName: "bootstrap", name: "Bootstrap"},
    { fileName: "c", name: "C"},
    { fileName: "cplusplus", name: "C++"},
    { fileName: "csharp", name: "C#"},
    { fileName: "clion", name: "CLion"},
    { fileName: "css3", name: "CSS"},
    { fileName: "dotnetcore", name: ".NET Core"},
    { fileName: "eclipse", name: "Eclipse"},
    { fileName: "git", name: "Git"},
    { fileName: "html5", name: "HTML"},
    { fileName: "intellij", name: "IntelliJ IDEA"},
    { fileName: "java", name: "Java"},
    { fileName: "javascript", name: "JavaScript"},
    { fileName: "mysql", name: "MySQL" },
    { fileName: "nodejs", name: "Node.js"},
    { fileName: "postman", name: "Postman"},
    { fileName: "python", name: "Python"},
    { fileName: "react", name: "React"},
    { fileName: "spring", name: "Spring Boot"},
    { fileName: "sqlite", name: "SQLite" },
    { fileName: "tailwindcss", name: "Tailwind CSS"},
    { fileName: "trello", name: "Trello"},
    { fileName: "typescript", name: "TypeScript"},
    { fileName: "vscode", name: "VS Code"}
  ];

}