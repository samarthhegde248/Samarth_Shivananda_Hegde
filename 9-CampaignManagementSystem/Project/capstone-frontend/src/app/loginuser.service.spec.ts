import { TestBed } from '@angular/core/testing';

import { LoginuserService } from './loginuser.service';

describe('LoginuserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginuserService = TestBed.get(LoginuserService);
    expect(service).toBeTruthy();
  });
});
