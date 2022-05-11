import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../../services/auth-service.service';
import { LoginComponent } from './login.component';

describe('Login component', () => {

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: AuthService;
  let el: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [LoginComponent],
      providers: [AuthService]
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(AuthService);
    el = fixture.debugElement.query(By.css('a'));
  });

  afterEach(() => {
    localStorage.removeItem('token');
  });

  it('TEST 1 ::: should return true for needsLogin() when there is no token stored in local storage.', () => {
    const result = component.needsLogin();
    expect(result).toBeTruthy();
  });

  it('TEST 2 ::: should return false for needsLogin() when there is token stored in local storage.', () => {
    localStorage.setItem('token', '1234');
    const result = component.needsLogin();
    expect(result).toBeFalsy();
  });

  it('TEST 3 ::: should check the state of button when the user is authenticated.', () => {
    expect(el.nativeElement.textContent.trim()).toBe('');
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Login');
    spyOn(service, 'isAuthenticated').and.returnValue(true);
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Logout');
  });
})
