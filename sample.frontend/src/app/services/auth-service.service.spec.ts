import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth-service.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  afterEach(() => {
    localStorage.removeItem('token');
  });

  it('should return true for isAuthenticated() when there is a token.', () => {
    localStorage.setItem('token', '1234');
    expect(service.isAuthenticated()).toBeTruthy();
  });

  it('it should return false for isAuthenticated() when there is no token.', () => {
    expect(service.isAuthenticated()).toBeFalsy();
  });
});
