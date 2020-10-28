import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    component = new RegistrationComponent();
  });

  afterEach(() => {
    component = null;
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it should register the customer and add increment by 1', () => {
    let count = component.addRegistraion();
    expect(count).toBe(11);
  });

  it('it should register the customer and add decrement by 1', () => {
    let count = component.removeRegistraion();
    expect(count).toBe(9);
  });

});
