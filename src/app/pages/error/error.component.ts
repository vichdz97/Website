import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor(private titleService: Title, private nav: NavigationService) {
    this.titleService.setTitle("Victor Hernandez, Jr. | 404 Page Not Found");
  }

  ngOnInit(): void {
    this.nav.activeLink = "error";    
  }

}
