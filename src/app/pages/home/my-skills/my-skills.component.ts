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
  skills: Skills[] = [
    // Frontend Languages
    { fileName: "html5", name: "HTML" },
    { fileName: "css3", name: "CSS" },
    { fileName: "javascript", name: "JavaScript" },
    { fileName: "typescript", name: "TypeScript" },

    // Programming Languages
    { fileName: "cplusplus", name: "C++" },
    { fileName: "java", name: "Java" },
    { fileName: "python", name: "Python" },

    // Frontend Frameworks
    { fileName: "angular", name: "Angular" },
    { fileName: "nextjs", name: "Next.js" },
    { fileName: "react", name: "React (Native)" },

    // Backend Development
    { fileName: "nodejs", name: "Node.js" },
    { fileName: "spring", name: "Spring Boot" },
    { fileName: "express", name: "Express.js"},
    
    // Testing Frameworks
    { fileName: "jest", name: "Jest"},
    { fileName: "junit", name: "JUnit"},

    // Styling Tools
    { fileName: "bootstrap", name: "Bootstrap" },
    { fileName: "tailwindcss", name: "Tailwind CSS" },

    // Databases
    { fileName: "mysql", name: "MySQL" },
    { fileName: "sqlite", name: "SQLite" },

    // Cloud Platforms
    { fileName: "amazonwebservices", name: "AWS" },
    { fileName: "firebase", name: "Firebase" },

    // API & Development Tools
    { fileName: "postman", name: "Postman" },

    // Data Formats
    { fileName: "json", name: "JSON" },

    // Package Managers
    { fileName: "npm", name: "npm" },

    // IDEs
    { fileName: "eclipse", name: "Eclipse" },
    { fileName: "vscode", name: "VS Code" },

    // Version Control
    { fileName: "git", name: "Git" }
  ];

  ngOnInit(): void {
    // `localeCompare` returns a number indicating whether 'a' string comes 
    // before/after/is the same as 'b' string.
    this.skills.sort((a: any, b: any) => a.fileName.localeCompare(b.fileName));
  }
}