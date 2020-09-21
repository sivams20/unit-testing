import { DebugElement } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AuthService } from '../service/auth.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [ AuthService ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    el = fixture.debugElement.query(By.css('#btn-auth'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('Should check Button label', () => {
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Login');
    spyOn(authService, 'isAuthenticated').and.returnValue(Promise.resolve(true));
    component.ngOnInit();
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Logout');
  });

  it('Button label via jasmine.done', (done) => {
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Login');
    let spy = spyOn(authService, 'isAuthenticated').and.returnValue(Promise.resolve(true));
    component.ngOnInit();
    spy.calls.mostRecent().returnValue.then(() => {
      fixture.detectChanges();
      expect(el.nativeElement.textContent.trim()).toBe('Logout');
      done();
    });
  });

  it('Button label via async() and whenStable()', async(() => {
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Login');
    spyOn(authService, 'isAuthenticated').and.returnValue(Promise.resolve(true));
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(el.nativeElement.textContent.trim()).toBe('Logout');
    });
    component.ngOnInit();
  }));

  it('Button label via fakeAsync() and tick()', fakeAsync(() => {
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Login');
    spyOn(authService, 'isAuthenticated').and.returnValue(Promise.resolve(true));
    component.ngOnInit();

    tick();
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Logout');
  }));

});
