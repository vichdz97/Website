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
        { fileName: "c", name: "C"},
        { fileName: "cplusplus", name: "C++"},
        { fileName: "csharp", name: "C#"},
        { fileName: "dotnetcore", name: ".NET Core"},
        { fileName: "python", name: "Python"},
        { fileName: "java", name: "Java"},
        { fileName: "spring", name: "Spring Boot"},
        { fileName: "html5", name: "HTML"},
        { fileName: "css3", name: "CSS"},
        { fileName: "javascript", name: "JavaScript"},
        { fileName: "nodejs", name: "Node.js"},
        { fileName: "react", name: "React"},
        { fileName: "angular", name: "Angular"},
        { fileName: "typescript", name: "TypeScript"},
        { fileName: "bootstrap", name: "Bootstrap"},
        { fileName: "mysql", name: "MySQL" },
        { fileName: "sqlite", name: "SQLite" },
        { fileName: "postman", name: "Postman"},
        { fileName: "git", name: "Git"},
        { fileName: "trello", name: "Trello"},
        { fileName: "vscode", name: "VS Code"},
        { fileName: "eclipse", name: "Eclipse"},
        { fileName: "intellij", name: "IntelliJ IDEA"},
        { fileName: "clion", name: "CLion"},
        { fileName: "androidstudio", name: "Android Studio"}
    ];

    projects = [
        {
            title: "Pokémon Generator",
            img: "pokemon.png",
            tech: ["pokeapi", "react", "typescript", "bootstrap"],
            description: `A random Pokémon generator that displays a Pokémon's sprite 
                          and game info.`,
            url: "https://pokemon-generator.victor-jr.com",
            github: "https://github.com/vichdz97/pokemon-generator"
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

    games = [
        {
          title: "Tic-Tac-Toe",
          img: "tic-tac-toe.png",
          tech: ["react", "typescript", "bootstrap"],
          description: `A fun, competitive 2-Player game of Tic-Tac-Toe.`,
          url: "https://tic-tac-toe.victor-jr.com",
          github: "https://github.com/vichdz97/tic-tac-toe"
        },
        {
            title: "Flip 'N Match",
            img: "flip-n-match.png",
            tech: ["html", "css", "javascript"],
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