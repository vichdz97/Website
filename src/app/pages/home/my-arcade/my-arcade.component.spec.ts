import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyArcadeComponent } from './my-arcade.component';

describe('MyArcadeComponent', () => {
  let component: MyArcadeComponent;
  let fixture: ComponentFixture<MyArcadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyArcadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyArcadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
