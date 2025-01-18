import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(private nav: NavigationService) {}

  setActiveLink(link: string): void {
    this.nav.activeLink = link;
  }

  isActive(link: string): string | boolean {
    return link === this.nav.activeLink && "text-slate-100";
  }
}
