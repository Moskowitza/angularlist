import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  homeTitle = "welcome to the HomePage";

  alertMe(val) {
    alert(val);
  }

  cat = {
    name: "eno",
    coat: "tuxedo"
  };

  myBoolean = true;

  myString = "Toki is a Cat";

  constructor() {}

  ngOnInit() {}
}
