import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tech-logos',
  templateUrl: './tech-logos.component.html',
  styleUrls: ['./tech-logos.component.css']
})
export class TechLogosComponent {
  @Input() name!: string;
  @Input() id?: string;
  @Input() class?: string;
}
