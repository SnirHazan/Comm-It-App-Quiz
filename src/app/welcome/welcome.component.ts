import { Component, OnInit } from '@angular/core';
import {UserDataService} from '../user-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {

  constructor(private user: UserDataService, private router:Router) { }

  ngOnInit() {
  }

  onStart(name: string, value2: string) {
    if (name === '' || value2 === '') {
      return false;
    }
    this.user.setFullName(name);
    this.router.navigate(['/Quiz']);
  }
}
