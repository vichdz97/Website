import { Component } from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.css']
})
export class FooterComponent {

	activeLink: string = window.location.href.split('/').pop()!;

	setActiveLink(link: string): void {
		this.activeLink = link;
	}

	isActive(link: string): string | boolean {
		return link === this.activeLink && "text-slate-100";
	}
}
