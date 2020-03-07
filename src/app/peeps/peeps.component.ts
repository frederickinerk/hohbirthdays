import { Component, OnInit } from "@angular/core";

import { BirthdayEvent } from "../birthdays";
import { BirthdaysService } from "../birthdays.service";

@Component({
  selector: "app-peeps",
  templateUrl: "./peeps.component.html",
  styleUrls: ["./peeps.component.css"]
})
export class PeepsComponent implements OnInit {
  constructor(private birthdaysService: BirthdaysService) {}

  birthdayEvents: BirthdayEvent[];

  ngOnInit() {
    this.getBirthdays();
  }

  getBirthdays(): void {
    this.birthdaysService
      .getBirthdays()
      .subscribe(birthdayEvents => (this.birthdayEvents = birthdayEvents));
  }
}
