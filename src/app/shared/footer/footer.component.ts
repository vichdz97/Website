import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.css']
})
export class FooterComponent {

	constructor(private nav: NavigationService) {}

	setActiveLink(link: string): void {
		this.nav.activeLink = link;
	}

	isActive(link: string): string | boolean {
		return link === this.nav.activeLink && "text-slate-100";
	}
}
