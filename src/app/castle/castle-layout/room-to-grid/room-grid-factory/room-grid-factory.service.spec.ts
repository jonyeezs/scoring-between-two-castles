import { TestBed } from '@angular/core/testing';

import { RoomGridFactoryService } from './room-grid-factory.service';

describe('RoomGridFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [RoomGridFactoryService]
  }));

  it('should be created', () => {
    const service: RoomGridFactoryService = TestBed.get(RoomGridFactoryService);
    expect(service).toBeTruthy();
  });
});
