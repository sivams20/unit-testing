import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: [ './form.component.scss' ]
})
export class FormComponent implements OnInit {

  public loginForm: FormGroup;
  public message: string;
  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [ Validators.required, Validators.email ]),
      password: new FormControl('', [ Validators.required, Validators.minLength(6) ])
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.message = 'Submitted';
    }
  }

}
