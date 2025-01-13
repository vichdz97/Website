import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import emailjs from '@emailjs/browser';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

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

    projects = [
        { 
            title: "Authentication System", 
            img: "authsys.png",
            tech: ["amazonwebservices", "angular", "bootstrap", "spring", "mysql", "postman"],
            description: `A dynamic web app that redirects users to the 
                          correct landing page based on their login credentials.`,
            url: "http://authentication-system.s3-website.us-east-2.amazonaws.com",
            github: "https://github.com/vichdz97/Authentication-System"
        },
        {
            title: "Pokémon Generator",
            img: "pokemon.png",
            tech: ["pokeapi", "react", "typescript", "bootstrap"],
            description: `Unleash any Pokémon with this random generator 
                        that reveals its sprite and game stats.`,
            url: "https://pokemon-generator.victor-jr.com",
            github: "https://github.com/vichdz97/pokemon-generator"
        }
    ];

    games = [
        {
          title: "Tic-Tac-Toe",
          img: "tic-tac-toe.png",
          tech: ["react", "typescript", "bootstrap"],
          description: `Challenge a friend in this fast-paced Tic-Tac-Toe duel 
                        and see who can claim victory first!`,
          url: "https://tic-tac-toe.victor-jr.com",
          github: "https://github.com/vichdz97/tic-tac-toe"
        },
        {
            title: "Flip 'N Match",
            img: "flip-n-match.png",
            tech: ["html5", "css3", "javascript"],
            description: `Try and beat the clock in this interactive card matching game!`,
            url: "https://flip-n-match.victor-jr.com",
            github: "https://github.com/vichdz97/flip-n-match"
        }
      ];

    contactForm = new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.pattern(/^([a-zA-Z0-9]+[\._-]?)+[a-zA-Z0-9]@(([a-zA-Z0-9]+[\._-]?)+[a-zA-Z0-9]\.)+[a-zA-Z]{2,4}$/)]),
        subject: new FormControl('', Validators.required),
        message: new FormControl('', Validators.required)
    });

    confirmation: string = "";

    constructor(private titleService: Title) {
        this.titleService.setTitle("Victor Hernandez, Jr. | Home");
    }

    get nameControl() {
        return this.contactForm.get('name') as FormControl;
    }

    get emailControl() {
        return this.contactForm.get('email') as FormControl;
    }

    get subjectControl() {
        return this.contactForm.get('subject') as FormControl;
    }

    get messageControl() {
        return this.contactForm.get('message') as FormControl;
    }

    hasErrors(control: FormControl) {
        return control?.invalid && (control?.dirty || control?.touched);
    }

    sendAnotherMsg() {
        return this.contactForm.dirty || this.contactForm.touched;
    }

    async sendEmail() {
        emailjs.init("Vqf8AFqe4RaJTl5DB");
        await emailjs.send("service_b90itwn","template_kyxxx89",{
            to_name: "Victor",
            from_name: this.contactForm.value.name,
            from_email: this.contactForm.value.email?.toLowerCase(),
            subject: this.contactForm.value.subject,
            message: this.contactForm.value.message
        });
        this.contactForm.reset();
        this.confirmation = "Message sent successfully!";
    }
}