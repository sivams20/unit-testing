import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AuthService } from '../service/auth.service';

import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let authService: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileComponent ],
      providers: [ AuthService ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check and return "fetching details" message', () => {
    spyOn(authService, 'checkAuthentication').and.returnValue(true);
    expect(authService.checkAuthentication).toHaveBeenCalled;
    component.fetchDetails();
    expect(component.message).toBe('Fetching Details');
  });

  it('should check and return "User Not Authenticated" message', () => {
    spyOn(authService, 'checkAuthentication').and.returnValue(false);
    expect(authService.checkAuthentication).toHaveBeenCalled;
    component.fetchDetails();
    expect(component.message).toBe('User Not Authenticated');
  });

  it('should fetch user details', () => {
    spyOn(authService, 'checkAuthentication').and.returnValue(true);
    expect(authService.checkAuthentication).toHaveBeenCalled;
    component.fetchDetails();
    expect(component.message).toBe('Fetching Details');
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#message').textContent).toContain('Fetching Details');
    // const title = fixture.debugElement.query(By.css('#message')).nativeElement;
    // expect(title.innerHTML).toBe('Fetching Details');
  });

});
