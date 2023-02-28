import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBrocketComponent } from './ngx-brocket.component';

describe('NgxBrocketComponent', () => {
  let component: NgxBrocketComponent;
  let fixture: ComponentFixture<NgxBrocketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxBrocketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBrocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
