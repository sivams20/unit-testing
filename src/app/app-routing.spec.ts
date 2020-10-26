import { async, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

import { routes } from '../app/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

describe('App routing example', () => {
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes(routes) ],
      declarations: [ HomeComponent, AppComponent ]
    });
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  it('navigate to default path', async(() => {
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/home');
    });
  }));

  it('navigate to "" redirects you to /home', fakeAsync(() => {
    router.navigate([ '' ]);
    tick();
    expect(location.path()).toBe('/home');
  }));

  it('navigate to profile', fakeAsync(() => {
    router.navigate([ 'profile' ]);
    tick();
    expect(location.path()).toBe('/profile');
  }));

});