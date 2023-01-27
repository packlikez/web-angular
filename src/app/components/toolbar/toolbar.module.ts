import {NgModule} from '@angular/core';
import {ToolbarComponent} from "./toolbar.component";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatListModule} from "@angular/material/list";
import {RouterLinkActive, RouterLinkWithHref} from "@angular/router";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    RouterLinkWithHref,
    CommonModule,
    RouterLinkActive

  ],
  exports: [ToolbarComponent]
})
export class ToolbarModule {
}
