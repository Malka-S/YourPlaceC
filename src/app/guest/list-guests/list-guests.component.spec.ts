import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGuestsComponent } from './list-guests.component';

describe('ListGuestsComponent', () => {
  let component: ListGuestsComponent;
  let fixture: ComponentFixture<ListGuestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGuestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
