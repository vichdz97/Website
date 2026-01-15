import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private titleService: Title, private nav: NavigationService) {
        this.titleService.setTitle("Victor Hernandez, Jr. | Home");
    }

    ngOnInit(): void {
        this.nav.activeLink = "home";
    }

}