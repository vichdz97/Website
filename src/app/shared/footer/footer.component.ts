import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.css']
})
export class FooterComponent {

	constructor(private nav: NavigationService) {}

	isActive(link: string): string | boolean | null {
		return link === this.nav.activeLink && "bg-sky-200 px-4 py-2 my-2 rounded-full transition-all" || null;
	}
}
