import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Routes} from "@angular/router";
import {routes} from "../../app-routing/app-routing.module";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  // currentRoute
  menuItems = routes

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log(this.route);
    console.log(this.route.snapshot);
    this.route.url.subscribe(url => console.log(url));
  }

}
