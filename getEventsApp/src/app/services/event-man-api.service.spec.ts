import { TestBed } from '@angular/core/testing';

import { EventManAPIService } from './event-man-api.service';

describe('EventManAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventManAPIService = TestBed.get(EventManAPIService);
    expect(service).toBeTruthy();
  });
});
