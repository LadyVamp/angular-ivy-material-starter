import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "chart-component";
  navLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router) {
    this.navLinks = [
      {
        label: "Дашборд1",
        link: "./first-tab",
        index: 0
      },
      {
        label: "Дашборд2",
        link: "./second-tab",
        index: 1
      }
    ];
  }
  ngOnInit(): void {
    this.router.events.subscribe(res => {
      this.activeLinkIndex = this.navLinks.indexOf(
        this.navLinks.find(tab => tab.link === "." + this.router.url)
      );
    });
  }
}
