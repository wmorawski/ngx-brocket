import { TestBed } from '@angular/core/testing';

import { NgxBrocketService } from './ngx-brocket.service';

describe('NgxBrocketService', () => {
  let service: NgxBrocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxBrocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
