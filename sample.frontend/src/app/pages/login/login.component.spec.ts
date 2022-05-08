import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '../../services/auth-service.service';

import { LoginComponent } from './login.component';

export class MockAuthService {
  
  isAuthenticated() {
    return !!localStorage.getItem('token');
  }
}

describe('Login component', () => {

  let loginComponent: LoginComponent;
  let service: MockAuthService;

  beforeEach(() => {
    service = new MockAuthService();
    loginComponent = new LoginComponent(service);
  });

  afterEach(() => {
    localStorage.removeItem('token');
  });

  it('should return true for needsLogin() when there is no token stored in local storage.', () => {
    const result = loginComponent.needsLogin();
    expect(result).toBeFalsy();
  });

  it('should return false for needsLogin() when there is token stored in local storage.', () => {
    localStorage.setItem('token', '1234');
    const result = loginComponent.needsLogin();
    expect(result).toBeTruthy();
  });
})
