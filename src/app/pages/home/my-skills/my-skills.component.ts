import { Component, OnInit } from '@angular/core';

interface Skills {
  fileName: string;
  name: string;
};

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.css']
})
export class MySkillsComponent implements OnInit {

  // svgs found here -> https://devicon.dev
  skills: Array<Skills> = [
    // Frontend Languages
    { fileName: "html5", name: "HTML" },
    { fileName: "css3", name: "CSS" },
    { fileName: "javascript", name: "JavaScript" },
    { fileName: "typescript", name: "TypeScript" },

    // Frontend Frameworks
    { fileName: "angular", name: "Angular" },
    { fileName: "nextjs", name: "Next.js" },
    { fileName: "react", name: "React" },
    { fileName: "react", name: "React Native" },

    // Styling Tools
    { fileName: "bootstrap", name: "Bootstrap" },
    { fileName: "tailwindcss", name: "Tailwind CSS" },

    // Backend Development
    { fileName: "nodejs", name: "Node.js" },

    // Programming Languages
    { fileName: "c", name: "C" },
    { fileName: "cplusplus", name: "C++" },
    { fileName: "java", name: "Java" },
    { fileName: "python", name: "Python" },

    // Frameworks & Libraries
    { fileName: "spring", name: "Spring Boot" },

    // Databases
    { fileName: "mysql", name: "MySQL" },
    { fileName: "sqlite", name: "SQLite" },

    // Data Formats
    { fileName: "json", name: "JSON" },

    // Package Managers
    { fileName: "npm", name: "npm" },

    // IDEs
    { fileName: "androidstudio", name: "Android Studio" },
    { fileName: "eclipse", name: "Eclipse" },
    { fileName: "vscode", name: "VS Code" },

    // Version Control
    { fileName: "git", name: "Git" },

    // API & Development Tools
    { fileName: "postman", name: "Postman" },

    // Cloud Platforms
    { fileName: "amazonwebservices", name: "AWS" },

    // Project Management
    { fileName: "trello", name: "Trello" },
  ];


  ngOnInit(): void {
    // `localeCompare` returns a number indicating whether 'a' string comes 
    // before/after/is the same as 'b' string.
    this.skills.sort((a: any, b: any) => a.fileName.localeCompare(b.fileName));
  }
}