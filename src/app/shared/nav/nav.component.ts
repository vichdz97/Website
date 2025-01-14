import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  activeLink: string = window.location.href.split('/').pop()!;

  setActiveLink(link: string): void {
    this.activeLink = link;
  }

  isActive(link: string): string | boolean {
    return link === this.activeLink && "text-slate-100";
  }

  hideNavbar(): boolean {
		return window.innerWidth < 960;
	}
}
