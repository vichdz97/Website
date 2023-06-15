import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

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
        img: "authsys.png",
        tech: ["aws", "mysql", "java", "spring-boot", "angular", "bootstrap", "postman"],
        description: `Designed a responsive web application that redirects the user 
                    to the appropriate landing page given specific login credentials.`,
        url: "http://authentication-system.s3-website.us-east-2.amazonaws.com/#/home",
        github: "https://github.com/vichdz97/Authentication-System"
    }, 
    { 
        title: "Library Management System",
        img: "library.png",
        tech: ["mysql", "java", "spring-boot", "angular", "bootstrap"],
        description: `Created a dynamic web application that allows the user to 
                    manage books in a virtual library environment.`,
        github: "https://github.com/vichdz97/Library-Management-System"
    }
    ];

    contactForm = new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.pattern(/^([a-zA-Z0-9]+[\._-]?)+[a-zA-Z0-9]@(([a-zA-Z0-9]+[\._-]?)+[a-zA-Z0-9]\.)+[a-zA-Z]{2,4}$/)]),
        subject: new FormControl('', Validators.required),
        message: new FormControl('', Validators.required)
    });

    constructor(private titleService: Title) {
        this.titleService.setTitle("Victor Hernandez, Jr. | Home");
    }
        
}