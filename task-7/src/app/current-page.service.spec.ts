import { TestBed } from '@angular/core/testing';

import { CurrentPageService } from './current-page.service';

describe('CurrentPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentPageService = TestBed.get(CurrentPageService);
    expect(service).toBeTruthy();
  });
});
