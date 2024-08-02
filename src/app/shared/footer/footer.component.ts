import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.css']
})
export class FooterComponent {

	icons!: HTMLCollectionOf<Element>;

	constructor(private router: Router) {}

	ngOnInit(): void {
		this.icons = document.getElementById('mobile-view')?.getElementsByClassName('bi')!;
		this.icons.namedItem('home')?.setAttribute('style', 'color: white;');

		const dot = document.getElementById('dot');
		const homeRect = document.getElementById('home')?.getBoundingClientRect();
		dot!.style.left = homeRect?.left + 'px';
	}

	hideDesktopView(): boolean {
		return window.innerWidth < 960;
	}

	hideMobileView(): boolean {
		return window.innerWidth >= 960;
	}

	goTo(page: string): void {
		// navigate to all but '/resume' (it doesn't exist)
		page != 'resume' && this.router.navigateByUrl(`/${page}`) ;

		// reset to default color (gray)
		for (let x = 0; x < this.icons.length; x++) 
			this.icons.item(x)?.setAttribute('style', 'color: gray;');

		// highlight selected icon
		this.icons.namedItem(page)?.setAttribute('style', 'color: white;');

		const rect = document.getElementById(page)?.getBoundingClientRect()!;
		const dot = document.getElementById('dot')!;
		dot.style.left = rect.left + 'px';
	}
}
