import { Component } from '@angular/core';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent {

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
      title: "Weather App",
      img: "weather.png",
      tech: ["openweatherapi", "react", "typescript", "tailwindcss"],
      description: `An intuitive weather app inspired by Apple's weather interface, 
                    providing real-time forecasts and detailed weather information.`,
      url: "https://weather-app.victor-jr.com",
      github: "https://github.com/vichdz97/weather-app"
    },
  ];

}
