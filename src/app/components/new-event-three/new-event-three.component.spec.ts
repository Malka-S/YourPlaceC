import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEventThreeComponent } from './new-event-three.component';

describe('NewEventThreeComponent', () => {
  let component: NewEventThreeComponent;
  let fixture: ComponentFixture<NewEventThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEventThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEventThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
