import { TestBed } from '@angular/core/testing';
import { FridgeService } from './fridge.service';
//import { environment } from 'src/environments/environment';

describe('FridgeService', () => {
  let service: FridgeService;

  jest.mock('path/to/environments/environment', () => ({
    environment: {
      production: false,
      defaultLocale: 'en_US',
    },
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FridgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
