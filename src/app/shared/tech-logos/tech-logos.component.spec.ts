import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechLogosComponent } from './tech-logos.component';

describe('TechLogosComponent', () => {
  let component: TechLogosComponent;
  let fixture: ComponentFixture<TechLogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechLogosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechLogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
