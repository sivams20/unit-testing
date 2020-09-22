import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormComponent ],
      imports: [ ReactiveFormsModule ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check user email is invalid', () => {
    let email = component.loginForm.controls[ 'email' ];
    expect(email.valid).toBeFalsy();
    expect(email.errors[ 'required' ]).toBeTruthy();
    email.setValue('abc');
    expect(email.errors[ 'email' ]).toBeTruthy();
  });

  it('should check user email is valid', () => {
    let email = component.loginForm.controls[ 'email' ];
    expect(email.valid).toBeFalsy();
    expect(email.errors[ 'required' ]).toBeTruthy();
    email.setValue('abc@gmail.com');
    expect(email.errors).toBeNull();
  });

  it('should check user password is invalid', () => {
    let password = component.loginForm.controls[ 'password' ];
    expect(password.valid).toBeFalsy();
    expect(password.errors[ 'required' ]).toBeTruthy();
    password.setValue('abc');
    expect(password.errors[ 'minlength' ]).toBeTruthy();
  });

  it('should check user password is valid', () => {
    let password = component.loginForm.controls[ 'password' ];
    expect(password.valid).toBeFalsy();
    expect(password.errors[ 'required' ]).toBeTruthy();
    password.setValue('abcabcabc');
    expect(password.valid).toBeTruthy();
  });

  it('should check whether the form is valid', () => {
    component.loginForm.controls[ 'email' ].setValue('abc@gmail.com');
    component.loginForm.controls[ 'password' ].setValue('12345test');
    expect(component.loginForm.valid).toBeTruthy();
  });

});
