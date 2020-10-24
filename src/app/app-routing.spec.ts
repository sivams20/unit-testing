import { async, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { _ParseAST } from '@angular/compiler';

import { routes } from '../app/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

describe('App routing example', () => {
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [
        AppComponent,
        HomeComponent
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    router.initialNavigation();
  });

});