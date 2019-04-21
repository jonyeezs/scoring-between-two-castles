import { TestBed } from '@angular/core/testing';

import { FabbyConnectorService } from './fabby-connector.service';

describe('FabbyConnectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FabbyConnectorService = TestBed.get(FabbyConnectorService);
    expect(service).toBeTruthy();
  });
});
