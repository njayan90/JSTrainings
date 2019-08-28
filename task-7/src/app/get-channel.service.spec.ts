import { TestBed } from '@angular/core/testing';

import { GetChannelService } from './get-channel.service';

describe('GetChannelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetChannelService = TestBed.get(GetChannelService);
    expect(service).toBeTruthy();
  });
});
