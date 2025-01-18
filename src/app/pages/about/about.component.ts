import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private titleService: Title, private nav: NavigationService) {
    this.titleService.setTitle("Victor Hernandez, Jr. | About");
  }
  
  ngOnInit(): void {
    this.nav.activeLink = "about";
  }
  
}
