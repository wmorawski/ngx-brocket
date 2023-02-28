import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BracketItemComponent } from './bracket-item.component';

describe('BracketItemComponent', () => {
  let component: BracketItemComponent;
  let fixture: ComponentFixture<BracketItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BracketItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BracketItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
