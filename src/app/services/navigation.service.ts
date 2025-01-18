import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  link: string = window.location.href.split('/').pop()!;

  constructor() { }

  get activeLink(): string {
    return this.link;
  }

  set activeLink(newLink: string) {
    this.link = newLink;
  }

}
