import { TestBed } from '@angular/core/testing';

import { RoomRepositoryService } from './room-repository.service';

describe('RoomRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoomRepositoryService = TestBed.get(RoomRepositoryService);
    expect(service).toBeTruthy();
  });
});
