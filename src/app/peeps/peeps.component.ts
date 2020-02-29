import { Component, OnInit } from '@angular/core';

import { BirthdayEvent } from '../birthdays';

@Component({
  selector: 'app-peeps',
  templateUrl: './peeps.component.html',
  styleUrls: ['./peeps.component.css']
})
export class PeepsComponent implements OnInit {

  constructor() { }

  birthdayEvents: BirthdayEvent[];

  ngOnInit() {
  }

}