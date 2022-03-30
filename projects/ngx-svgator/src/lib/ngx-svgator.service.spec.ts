import { TestBed } from '@angular/core/testing';

import { NgxSvgatorService } from './ngx-svgator.service';

describe('NgxSvgatorService', () => {
  let service: NgxSvgatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSvgatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
