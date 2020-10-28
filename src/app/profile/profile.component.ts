import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: [ './profile.component.scss' ]
})
export class ProfileComponent implements OnInit {

  public message = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  fetchDetails() {
    if (this.authService.checkAuthentication()) {
      this.message = 'Fetching Details';
    } else {
      this.message = 'User Not Authenticated';
    }
  }

}
