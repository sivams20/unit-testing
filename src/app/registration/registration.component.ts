import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: [ './registration.component.scss' ]
})
export class RegistrationComponent implements OnInit {

  public registrationCount = 10;
  public registrationLimit = 100;

  constructor() { }

  ngOnInit(): void {

  }

  addRegistraion() {
    return ++this.registrationCount;
  }

  removeRegistraion() {
    return --this.registrationCount;
  }

}
