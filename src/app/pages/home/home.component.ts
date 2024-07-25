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

    skills = [
        { fileName: "c", name: "C Programming"},
        { fileName: "c++", name: "C++"},
        { fileName: "python", name: "Python"},
        { fileName: "java", name: "Java"},
        { fileName: "spring-boot", name: "Spring Boot"},
        { fileName: "html", name: "HTML"},
        { fileName: "css", name: "CSS"},
        { fileName: "javascript", name: "JavaScript"},
        { fileName: "typescript", name: "TypeScript"},
        { fileName: "react", name: "React"},
        { fileName: "angular", name: "Angular"},
        { fileName: "bootstrap", name: "Bootstrap"},
        { fileName: "mysql", name: "MySQL" },
        { fileName: "postman", name: "Postman"},
        { fileName: "git", name: "Git"},
        { fileName: "vs", name: "VS Code"},
        { fileName: "intellij", name: "IntelliJ IDEA"},
        { fileName: "android-studio", name: "Android Studio"}
    ];

    projects = [
        { 
            title: "Authentication System", 
            img: "authsys-progress.png",
            tech: ["aws", "mysql", "java", "spring-boot", "angular", "bootstrap", "postman"],
            description: `Designed a responsive web application that redirects the user 
                        to the appropriate landing page given specific login credentials.`,
            // url: "http://authentication-system.s3-website.us-east-2.amazonaws.com/#/login",
            github: "https://github.com/vichdz97/Authentication-System"
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
          title: "Piano Tap",
          img: "piano-tap.png",
          tech: ["html", "css", "javascript"],
          description: `An interactive web application that allows the user
                        to make music with the tap of a tile.`,
          url: "https://piano-tap.victor-jr.com",
          github: "https://github.com/vichdz97/Piano-Tap"
        },
        {
          title: "Tic-Tac-Toe",
          img: "tic-tac-toe.png",
          tech: ["react", "typescript", "bootstrap"],
          description: `A fun, competitive 2-Player game of Tic-Tac-Toe.`,
          url: "https://tic-tac-toe.victor-jr.com",
          github: "https://github.com/vichdz97/tic-tac-toe"
        },
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