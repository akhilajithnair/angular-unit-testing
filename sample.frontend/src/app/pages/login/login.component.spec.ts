import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '../../services/auth-service.service';

import { LoginComponent } from './login.component';

export class MockAuthService {
  
  isAuthenticated() {
    return !!localStorage.getItem('token');
  }
}

describe('Login component', () => {

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: MockAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LoginComponent],
      providers: [AuthService]
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(AuthService);
  });

  afterEach(() => {
    localStorage.removeItem('token');
  });

  it('should return true for needsLogin() when there is no token stored in local storage.', () => {
    const result = component.needsLogin();
    expect(result).toBeFalsy();
  });

  it('should return false for needsLogin() when there is token stored in local storage.', () => {
    localStorage.setItem('token', '1234');
    const result = component.needsLogin();
    expect(result).toBeTruthy();
  });

  it('should return false for needsLogin() when there is token.', () => {
    spyOn(service, 'isAuthenticated').and.returnValue(false);
    expect(component.needsLogin()).toBeFalsy();
  })
})
