import { TestBed } from '@angular/core/testing';

import { SelectRoomManagerService } from './select-room-manager.service';

describe('SelectRoomManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectRoomManagerService = TestBed.get(
      SelectRoomManagerService
    );
    expect(service).toBeTruthy();
  });
});
