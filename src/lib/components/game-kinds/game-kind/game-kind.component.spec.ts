import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameKindComponent } from './game-kind.component';

describe('GameKindComponent', () => {
  let component: GameKindComponent;
  let fixture: ComponentFixture<GameKindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameKindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameKindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
